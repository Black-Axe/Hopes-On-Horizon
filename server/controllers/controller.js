import express from 'express';
import axios from 'axios';


var authUrl = 'https://api.petfinder.com/v2/oauth2/token';
var url = 'https://api.petfinder.com/v2/animals';

import retry from 'retry';


const router = express.Router();

var token;
var expires;
var token_type;



const operation = retry.operation({
    retries: 3,
    factor: 3,
    minTimeout: 1 * 1000,
    maxTimeout: 60 * 1000,
    randomize: true,
  });
  




export const getAnimals = async (req, res) => {
    var tries = 5;
    var currentTry = 0;

    if(!token){
    await getToken();
    }

    operation.attempt(async (currentAttempt) => {
        console.log('sending request: ', currentAttempt, ' attempt');
        try {
      
            await axios.request(url, {
                headers: {
                    'Authorization': token_type + " " + token,
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(function (response) {
           
                if(response.status == 200){
                    console.log('success');
                    const data = response.data.animals;
                    var filteredAnimals = [];
                    for(var i = 0; i < data.length; i++){
                        if(invalidName(data[i].name)){
                            continue;
                        }else{
                            filteredAnimals.push(data[i]);
                        }
                        //console.log(data[i].name);
                        //console.log(invalidName(data[i].name));
                    }

                    const pagination = response.data.pagination;
                    var resp = {animals: filteredAnimals, pagination: pagination};
        
                    res.json(resp);
                }
            })







      
        } catch (e) {
            console.log(e);
            await getToken();
          if (operation.retry(e)) { return; }
        }
      });





    
}

export const getAnimal = (req, res) => {
    res.json({status: 'success', message: 'Get animal hehe'});
}


export const getAnimalsByLocation = async (req, res) => {
    //http://localhost:5000/location/newyork,ny?state=ny&city=newyork
    var tries = 5;
    var currentTry = 0;

    var state = req.query.state;
    var city = req.query.city;
    var zip = req.query.zipcode;

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
    var location;
     

    
  if((!city || !state) && !zip){
      console.log('yo');
      res.json({status: 'error', message: 'Please provide a city or state, or zipcode'});
  }else{


    if(!location){
        if(zip){
            location = zip;
        }else{
            location = city + ',' + state;
        }
    }

    if(!token){
        await getToken();
    }
    operation.attempt(async (currentAttempt) => {
        console.log('sending request: ', currentAttempt, ' attempt');
        try {
      
            await axios.request(url, {
                headers: {
                    'Authorization': token_type + " " + token,
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                params: {
                    location: location,
                    distance: distance
                }
            }).then(function (response) {
           
                if(response.status == 200){
                    console.log('success');
                    const data = response.data;
                   // console.log(response);
                   // console.log(data);

                   
                    

                    const pagination = response.data.pagination;
                    var resp = {animals: response.data.animals, pagination: pagination};
        
                    res.json(resp);
                }
            })







      
        } catch (e) {
            console.log(e);
            console.log('EEEERRRROR');
            console.log(e.response);
            await getToken();
          if (operation.retry(e)) { return; }
        }
      });





   // res.json({status: 'success', message: 'Get animals by locationsss'});
  }


 

  



};

export const locationController = async(req, res) =>{
    res.json({status: 'success', message: 'Get location'});
}


const getToken = async () => {

    await axios.post(authUrl, {
        grant_type: 'client_credentials',
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET
    }).then(function (response) {
        //console.log(response.data);
        token = response.data.access_token;
        expires = response.data.expires_in;
        token_type = response.data.token_type;
      })
      .catch(function (error) {
        console.log(error);
      });


}

const invalidName = (name) => {
    let isnum = /^\d+$/.test(name);
    return isnum;
    
};

export default router;
