'use strict'
const axios=require('axios');
const Moviemodel=require('../Models/Movie.model')
const Cache=require('../helpers/Cache')
let cache=new Cache();

let Moviecontroller = async (req, res) => {
    let currentDate=new Date()  
    let city = req.query.query;
    if((city===cache.city)&&(cache.date.getDate()===currentDate.getDate())){
        res.send(cache.data);
    
        }else{
    
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&query=${city}`;
    let axiosResponsee = await axios.get(url);
    let movieResponse = axiosResponsee.data;
    let cleanedDataa = movieResponse.results.map(item => {
        return new Moviemodel(item);
    })
    res.send(cleanedDataa)
    cache.data=cleanedDataa;
    cache.city=city;
    }
}
    module.exports=Moviecontroller;