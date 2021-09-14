'use strict';
const express = require('express'); 
const server = express();
const cors = require('cors');
const axios=require("axios");
server.use(cors());
require('dotenv').config();
const weatherData = require('./data/weather.json');
const PORT = process.env.PORT;



server.get('/test', (req, res) => {
    res.status(200).send('hello world')});

    let handleMovie= async (req,res)=>{
        let city = req.query.searchQuery;
        let url=`https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&query=${city}`;
        let axiosResponsee= await axios.get(url);
        let movieResponse=axiosResponsee.data;
        let cleanedDataa=movieResponse.data.map(item=>{
            return new Movie(element);
        })
        res.status(200).json(cleanedDataa);
    }




    server.get('/movie', handleMovie);
    
    class Movie {
        constructor(item) {
            this.title = item.original_title;
            this.overview = item.overview;
            this.avgVotes = item.vote_average;
            this.totalVotes= item.vote_count;
            this.popularity = item.popularity;
            this.releaseDate = item.release_date;
    
        }
    }










let handleWeather= async (req,res)=>{
    let lat= Number(req.query.lat);
    let lon= Number(req.query.lon)
    let url=`https://api.weatherbit.io/v2.0/forecast/daily?key=${process.env.WEATHER_API_KEY}&lat=${lat}&lon=${lon}`;
    let axiosResponse= await axios.get(url);
    let sweatresponse=axiosResponse.data;
    let cleanedData=sweatresponse.data.map(item=>{
        return new ForeCastarr(item.datetime,item.weather.description);
    })
    res.status(200).json(cleanedData);
}
server.get('/sweat',handleWeather)
class ForeCastarr{
    constructor(date,description){
        this.date=date;
        this.description=description
    }
}

server.get('/weather',(req,res)=>{
    let lat=Number(req.query.lat);
    let lon=Number(req.query.lon);
    let searchQuery;
    if (lat&&lon){
        searchQuery =weatherData.find(item=>{
            if(item.lat === lat && item.lon === lon){
                return item;
            }});
            console.log(searchQuery);
            let forcast1= searchQuery.data.map(item=>{
                return new Forecast(item)
            });


            class Forecast {
                constructor(x) {
            
                 this.date = x.valid_date;
                 this.description = x.weather.description;

                }}

            res.status(200).json(forcast1);
            }else{
         res.status(500).send('not found');
            }

            });




    server.listen(PORT, ()=>{
        console.log(`Listening on port ${PORT}` )
    });
