'use strict'

const axios=require('axios');

const Weathermodel=require('../Models/Weather.model');

let Weathercontroller = async (req, res) => {
    let lat = Number(req.query.lat);
    let lon = Number(req.query.lon)
    let url = `https://api.weatherbit.io/v2.0/forecast/daily?key=${process.env.WEATHER_API_KEY}&lat=${lat}&lon=${lon}`;
    let axiosResponse = await axios.get(url);
    let sweatresponse = axiosResponse.data;
    let cleanedData = sweatresponse.data.map(item => {
        return new Weathermodel(item.datetime, item.weather.description);
    })
    res.status(200).json(cleanedData);
}

module.exports=Weathercontroller;