import express from 'express';

import { getAnimal, getAnimals} from  '../controllers/controller.js';

const router = express.Router();

router.get('/', getAnimals);

// this route is accessed via www.url.com/stocks/:stock
router.get('/:animal', getAnimal);


//we can access query params 
//like ?stock= or ?stocksym= by using 
//req.query.stock or req.query.stocksym

export default router