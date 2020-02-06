const express = require('express');
const axios = require('axios');
const Recommender = require('./recommenderModel');

const app = express.Router();

// recommend strains
app.post('/', (request, response) => {
    axios.post('https://bestbud-strain-suggestions.herokuapp.com/suggest', request.body)
        .then(res => {
            const arrayOfStrains = res.data.split(' ');
            Recommender.fetch(arrayOfStrains)
                .then(r => response.status(200).json({message: 'strains successfully recommended', strains: r, arrayToMakeSureIdsMatch: arrayOfStrains}))
                .catch(e => {
                    response.status(500).json({message: 'error fetching strains'});
                    console.log(e);
                });
        })
        .catch(err => {
            response.status(500).json({message: 'error recommending strains'});
            console.log(err);
        });
});

module.exports = app;