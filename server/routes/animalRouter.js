import express from 'express';

import { getAnimal, getAnimals, getAnimalsByLocation, locationController} from  '../controllers/controller.js';

const router = express.Router();

router.get('/', getAnimals);


//router.get('/location/:location', getAnimalsByLocation);
router.use('/location/:location', getAnimalsByLocation);


router.use('/location', locationController);


// this route is accessed via www.url.com/animals/:animal
router.get('/:animal', getAnimal);


export default router