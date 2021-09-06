import express from 'express';
import axios from 'axios';

var authUrl = 'https://api.petfinder.com/v2/oauth2/token';
var url = 'https://api.petfinder.com/v2/animals';

import retry from 'retry';
import axiosRetry from 'axios-retry';

const router = express.Router();

var token;
var token_type;
var retryMsg = "too many retries on making request, server can't request resource";


var maxRetries = 4;




export const getAnimals = async (req, res) => {
    let page = req.query.page;
    let limit = req.query.limit;
    let urlWithParams = url;

    if(page){
        console.log("page we have")
        urlWithParams = url + '?page=' + page;

        if(limit){
            console.log("limit we have");
            if(limit >=100){
                limit = 100;
            }
            if(limit <= 0){
                limit = 1;
            }
            urlWithParams = urlWithParams + '&limit=' + limit;
        }else{
            console.log("limit we don't have");
        }

    }
   
    if(!page && limit){
        console.log("limit we have only");
        urlWithParams = url + '?limit=' + limit;
    }
    console.log("URL");
    console.log(urlWithParams);

   


    
    if(!token){
    await getToken();
    }
    
    
    
    let triesCounter = 0;
    while(triesCounter <= maxRetries){
        var headers = {
            'Authorization': token_type + " " + token,
            'Content-Type': 'application/x-www-form-urlencoded'
        };
    
        console.log("trying to get animals");
        console.log("Trying for " + (triesCounter+1) + " time...");
      

        try{
            await axios.get(urlWithParams, {
                headers: headers,
            }).then(function (response){
                var data = response.data;
                //res.json(response.data);
                if(data){
                    console.log("retrieved data, now filtering");
                    var animals = data.animals;
                    var pagination = data.pagination;
                    var filteredAnimals = [];
                    for(var i = 0; i < animals.length; i++){
                        if(!invalidName(animals[i].name)){
                            filteredAnimals.push(animals[i]);
                        }
                    }
                    var resp = {animals: filteredAnimals, pagination: pagination};
                    res.json(resp);
                    return;
                }else{
                    res.status(500).send('error');
                    return;
                }    

                
            })
            return;
        }
        catch(e){
            console.log("error getting animals");
            triesCounter++;
            if(triesCounter >= maxRetries){
                console.log("too many retries, backing off");
                res.json({status: 444, message: retryMsg});
                return;
            }
            if(triesCounter == 1){
                console.log("getting new token");
                await getToken();
             
            }

            console.log('\n');
        }
    }


   
}

export const getAnimal =  async (req, res) => {
    const animalId = req.params.animal;

    var animalUrlId = url + "/" + animalId;

    
    if(invalidNumber(animalId) || !animalId){
        res.status(400).json("Invalid animal idd");
        return;
    }


    if(!token){
    await getToken();
    }

    let triesCounter = 0;

    while(triesCounter <= maxRetries){

        var headers = {
            'Authorization': token_type + " " + token,
            'Content-Type': 'application/x-www-form-urlencoded'
        };

        console.log("trying to get animal");
        console.log("Trying for " + triesCounter + " time...");

        try{
            await axios.get(animalUrlId, {
                headers: headers,
            }).then(function (response){
                var data = response.data;
                if(data){
                    console.log("retrieved data");
                    res.json(data);
                    return;
                }else{
                    res.status(500).send('error');
                    return;
                }    

                
            })
            return;
        }
        catch(e){
            console.log("error getting animal");
            triesCounter++;
            if(triesCounter >= maxRetries){
                console.log("too many retries, backing off");
                res.json({status: 444, message: retryMsg});
                return;
            }
            if(triesCounter == 1){
                console.log("getting new token");
                await getToken();
             
            }

            console.log('\n');

        }










    }
        


   

   //await makeApiRequest(animalUrlId);

    //var animal = await makeApiRequest(animalUrlId);
    //console.log(animal);
    //res.json(animal);
}


export const getAnimalsByLocation = async (req, res) => {
    //http://localhost:5000/search/location/{distance in miles}?state=ny&city=newyork


    var page = req.query.page;
    var state = req.query.state;
    var city = req.query.city;
    var zip = req.query.zipcode;
    var location = req.query.location;

    if(location){
        console.log("location we have");
        console.log(location);
    };

    var {distance} = req.params;
    if(!distance){
        distance = 50;
    }
    if(distance > 500 || distance < 1){
        distance = 50;
    }
    console.log(distance);
    
    if(state){
        console.log('state')
        console.log(state);
    }else{
        console.log('no state')
    }
    if(city){
        console.log('city')
        console.log(city);
    }else{
        console.log('no city')
    }
    if(zip){
        console.log('zip')
        console.log(zip);
    }else{
        console.log('no zip')
    }
     

    
  if((!city || !state) && !zip && !location){
      console.log('yo');
      res.json({status: 'error', message: 'Please provide a city or state, or zipcode'});
      return;
  }else{


    if(!location){
        if(zip){
            location = zip;
        }else{
            location = city + ', ' + state;
        }
    }

    if(!token){
        await getToken();
    }

    if(!page){
        page = 1;
    }

    const params = { location: location, distance: distance , page: page};

    let triesCounter = 0;

    while(triesCounter <= maxRetries){
        var headers = {
            'Authorization': token_type + " " + token,
            'Content-Type': 'application/x-www-form-urlencoded'
        };


        console.log("trying to get animals by location");
        console.log("Trying for " + triesCounter + " time...");

        try{
            await axios.get(url, {
                params: params,
                headers: headers,

            }).then(function (response){
                var data = response.data;
                if(data){
                    console.log("retrieved data");
                    res.json(data);
                    return;
                }else{
                    res.status(500).send('error');
                    return;
                }    

                
            })
            return;
        }
        catch(e){
            triesCounter++;
            if(triesCounter >= maxRetries){
                console.log("too many retries, backing off");
                res.json({status: 444, message: retryMsg});
                return;
            }
            if(triesCounter == 1){
                console.log("getting new token");
                await getToken();
             
            }

            console.log('\n');
        }





    }


   
  }


 

  



};

export const locationController = async(req, res) =>{
    res.json({status: 'success', message: 'Get location'});
}


export const getAnimalsNextPage = async (req, res) => {

};


//helpers

const getToken = async () => {
    console.log("getting token inside gettoken");

    await axios.post(authUrl, {
        grant_type: 'client_credentials',
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET
    }).then(function (response) {
        //console.log(response.data);
        token = response.data.access_token;
       // expires = response.data.expires_in;
        token_type = response.data.token_type;
       
        
      })
      .catch(function (error) {
        console.log(error);
      });

     

}

const getTokenTest = async () => {
    token = "test";
}

const invalidName = (name) => {
    let isnum = /^\d+$/.test(name);
    return isnum;
    
};

const invalidNumber = (number) => {
    if(isNaN(number)){
        return true;
    }


    
    if(!isNaN(number)){
        if(number < 0){
            return true;
        }
    }

    return false;


}






const makeApiRequestSimple = async(url, params) => {

    //check for params and set our headers
    if(params){
        console.log('params');
        console.log(params);
    }
    var headers = {
        'Authorization': token_type + " " + token,
        'Content-Type': 'application/x-www-form-urlencoded'
    };


        return await axios.get(url, {
            headers: headers,
            params: params
        }).then((r) => {
           // console.log(r.data);
           console.log('returning data');
            return r.data;
        })
      
      
    }






export default router;
