'use strict'



class Moviemodel {
    constructor(item) {
        this.title = item.original_title;
        this.overview = item.overview;
        this.avgVotes = item.vote_average;
        this.totalVotes = item.vote_count;
        this.popularity = item.popularity;
        this.releaseDate = item.release_date;

    }
}
module.exports=Moviemodel;