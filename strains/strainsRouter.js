const express = require('express');
const Strains = require('./strainsModel');

const app = express.Router();

// fetch all strains with a limit and offset, returns an array
app.post('/', validateFetch, (request, response) => {
    const {limit, offset} = request.body;

    Strains.fetch(limit, offset)
        .then(res => response.status(200).json(res))
        .catch(err => {
            response.status(500).json({message: 'error fetching strains'});
            console.log(err);
        });
});

// fetch strains with a filter and a query, returns an array
app.post('/query', validateFetchBy, (request, response) => {
    const {filter, query, limit, offset} = request.body;

    Strains.fetchBy(filter, query, limit, offset)
        .then(res => response.status(200).json(res))
        .catch(err => {
            response.status(500).json({message: 'error fetching strains'});
            console.log(err);
        });
});

// fetch a single strain, returns an object
app.get('/:id', (request, response) => {
    const id = request.params.id;

    Strains.fetchById(id)
        .then(res => response.status(200).json(res))
        .catch(err => {
            response.status(500).json({message: 'error fetching strain'});
            console.log(err);
        });
});

// validation middleware

function validateFetch(request, response, next) {
    const {limit, offset} = request.body;

    // will throw an error since false is equal to 0
    if (!limit && limit !== 0) {
        response.status(400).json({message: 'limit missing'});
    } else if (!offset && offset !== 0) {
        response.status(400).json({message: 'offset missing'});
    } else if (typeof limit !== 'number') {
        response.status(400).json({message: 'limit must be a number'});
    } else if (typeof offset !== 'number') {
        response.status(400).json({message: 'offset must be a number'});
    } else {
        next();
    };
};

function validateFetchBy(request, response, next) {
    const {filter, query, limit, offset} = request.body;

    if (!filter || !query || !limit && limit !== 0 || !offset && offset !== 0) {
        response.status(400).json({message: 'one or more fields missing'});
    } else if (typeof filter !== 'string' || typeof query !== 'string' || typeof limit !== 'number' || typeof offset !== 'number') {
        response.status(400).json({message: 'one or more fields are the wrong data type'});
    } else {
        next();
    };
};

module.exports = app;