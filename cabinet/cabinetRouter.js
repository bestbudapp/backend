const express = require('express');
const Cabinet = require('./cabinetModel');

const app = express.Router();

// add strain to user's cabinet
app.post('/:id', (request, response) => {
    const user_id = request.params.id;
    const strain_id = request.body.strain_id;

    Cabinet.add(user_id, strain_id)
        .then(res => response.status(201).json({message: "strain successfully added to user's cabinet"}))
        .catch(err => {
            response.status(500).json({message: "error adding strain to user's cabinet"});
            console.log(err);
        });
});

// fetch user's cabinet
app.get('/:id', (request, response) => {
    const id = request.params.id;

    Cabinet.fetch(id)
        .then(res => response.status(200).json(res))
        .catch(err => {
            response.status(500).json({message: "error fetching user's cabinet"});
            console.log(err);
        });
});

// delete strain from user's cabinet
app.delete('/:id', (request, response) => {
    const id = request.params.id;

    Cabinet.remove(id)
        .then(res => response.status(201).json({message: "successfully deleted strain from user's cabinet"}))
        .catch(err => {
            response.status(500).json({message: "error deleting strain from user's cabinet"});
            console.log(err);
        });
});

module.exports = app;