'use strict'







class Weather1model {
    constructor(x) {

        this.date = x.valid_date;
        this.description = x.weather.description;

    }
}

module.exports=Weather1model;