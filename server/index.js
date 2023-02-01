import express  from "express";
import bodyParser from "body-parser";
import cors from 'cors';

// express iniitialize
const app = express()



// APP CONFIGURATION
app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());


// DATABASE CONNECTION
import mongoseConnection from "./database/db.js";
import DefaultData from "./default.js";
mongoseConnection();
DefaultData();


const PORT = 8000;
app.listen(PORT, ()=>{ 
	console.log(`Server is running on ${PORT}`)
})