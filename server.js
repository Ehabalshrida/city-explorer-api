'use strict';
const express = require('express');
const server = express();
const cors = require('cors');
const axios = require("axios");
server.use(cors());
require('dotenv').config();
const weatherData = require('./data/weather.json');
const PORT = process.env.PORT;
let Weathercontroller=require('./controllers/Weather.controller')
let Moviecontroller=require('./controllers/Movie.controller')
let Weathercontrollers=require('./controllers/Weather1.controller');



server.get('/movie', Moviecontroller);
server.get('/weather2', Weathercontroller)
server.get('/weather1', Weathercontrollers)




server.listen(PORT, () => {
console.log(`Listening on port ${PORT}`)
});

server.get("/",(req,res)=>{
    res.send("hello")
})


//localhost:8000/movie?searchQuery=Amman

