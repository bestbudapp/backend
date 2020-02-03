const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./authModel');

const app = express.Router();

// user sign up
app.post('signup', validateUser, (request, response) => {
    let user = request.body;
    const hash = bcrypt.hashSync(request.body.password, 10);
    user.password = hash;
    
    // writing out in case more information than needed is provided in body of request
    Users.signup({username: user.username, password: user.password})
        .then(res => response.status(200).json({message: 'successfully signed user up'}))
        // will talk with front end to see if there is anything they want returned
        .catch(err => {
            response.status(500).json({message: 'error signing user up'});
            console.log(err);
        });
});

// validate body of request on sign up and sign in
function validateUser(request, response, next) {
    if (!request.body.username) {
        response.status(404).json({message: 'username missing from body'});
    } else if (!request.body.password) {
        response.status(404).json({message: 'password missing from body'});
    } else {
        next();
    };
};

module.exports = app;