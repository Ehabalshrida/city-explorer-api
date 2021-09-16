'use strict'
const Weather1model=require('../Models/Weather1.model')

const weatherData = require('../data/weather.json');


let Weathercontrollers= (req,res)=>{
    let lat = Number(req.query.lat);
    let lon = Number(req.query.lon);
    console.log(1, lat)
    console.log(2, lon)

    let searchQuery;
    if (lat && lon) {
        searchQuery = weatherData.find(item => {
            if (item.lat === lat && item.lon === lon) {
                return item;

            }
        });
        console.log(3, searchQuery);
        let forcast1 = searchQuery.data.map(item => {
            return new Weather1model(item)
        });
console.log(forcast1)

        res.json(forcast1);
    } else {
        res.send('not found');
    }
};

module.exports=Weathercontrollers;