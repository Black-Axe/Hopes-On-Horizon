import express from 'express';

import {getAnimalsByLocation, locationController} from  '../controllers/controller.js';

const router = express.Router();


router.get('/', async (req, res) => {
    res.json({status: 'success', message: 'Get stuff'});

   
});

//router.get('/location/:location', getAnimalsByLocation);
router.use('/location/:distance', getAnimalsByLocation);

//we can access query params 
//like ?stock= or ?stocksym= by using 
//req.query.stock or req.query.stocksym

router.use('/location', locationController);


export default router