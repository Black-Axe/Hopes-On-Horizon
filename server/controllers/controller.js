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
        
                    res.json(response.data);
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
    res.json({status: 'success', message: 'Get animal'});
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

export default router;
