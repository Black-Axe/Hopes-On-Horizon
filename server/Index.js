import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import animalRouter from './routes/animalRouter.js';
const app = express()
dotenv.config();




app.use(express.urlencoded({extended: false}))
app.use(express.json()) // To parse the incoming requests with JSON payloads

app.use(cors());
app.get('/', async (req, res) => {
    res.json({status: 'success', message: 'Get stuff'});

   
});


app.use('/animals', animalRouter);



app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000/');
} );