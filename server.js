'use strict';
const express = require('express'); 
const server = express();
const cors = require('cors');
server.use(cors());
require('dotenv').config();
const weatherData = require('./data/weather.json');
const PORT = process.env.PORT;



server.get('/test', (req, res) => {
    res.status(200).send('hello world')

})

server.get('/weather',(req,res)=>{
    let lat=Number(req.query.lat);
    let lon=Number(req.query.lon);
    let searchQuery;
    if (lat&&lon){
        searchQuery =weatherData.find(item=>{
            if(item.lat === lat && item.lon === lon){
                return item;
            }});
            let forcast1= searchQuery.data.map(item=>{
                return new Forecast(item)
            });


            class Forecast {
                constructor(x) {
            
                 this.date = x.valid_date
                 this.descrption = x.weather.description; 

                }}

            res.status(200).json(forcast1);
            }else{
         res.status(500).send('not found');
            }

            });




    server.listen(PORT, ()=>{
        console.log(`Listening on port ${PORT}` )
    });
