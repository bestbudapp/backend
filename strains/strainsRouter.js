const express = require('express');
const axios = require('axios');
const Strains = require('./strainsModel');
// will not need a model because i will just be making calls to the data science api

const app = express.Router();

// fetch all strains OR fetch strains by a filter IF a body is passed
app.get('/', (request, response) => {
    if (request.body.strain !== undefined) {
        response.send({message: 'strain specified, currently working with data science to set this endpoint up'});
    } else {
        response.send({message: 'currently working with data science to set this endpoint up'});
    };
});

app.get('/test', (request, response) => {
    Strains.test()
        .then(res => {
            response.status(200).json(res);
            console.log(res[0].flavors.split(', '));
        });
});
// need to talk to ds about pagination

module.exports = app;