import express  from "express";
import bodyParser from "body-parser";
import cors from 'cors';

// APP CONFIGURATION
app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

const app = express()

const PORT = 8000;
app.listen(PORT, ()=>{
	console.log(`Server is running on ${PORT}`)
})