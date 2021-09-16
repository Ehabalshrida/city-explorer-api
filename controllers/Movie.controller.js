'use strict'
const axios=require('axios');
const Moviemodel=require('../Models/Movie.model')

let Moviecontroller = async (req, res) => {
               
    let city = req.query.query;
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&query=${city}`;
    let axiosResponsee = await axios.get(url);
    let movieResponse = axiosResponsee.data;
    let cleanedDataa = movieResponse.results.map(item => {
        return new Moviemodel(item);
    })
    res.send(cleanedDataa)

}
    module.exports=Moviecontroller;