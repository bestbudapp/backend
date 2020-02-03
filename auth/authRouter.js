const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./authModel');

const app = express.Router();

// user sign up
app.post('/signup', validateUser, (request, response) => {
    // hashing password
    let user = request.body;
    const hash = bcrypt.hashSync(request.body.password, 10);
    user.password = hash;
    
    // writing out in case more information than needed is provided in body of request
    User.signUp({username: user.username, password: user.password})
        // .then(res => response.status(200).json({message: 'successfully signed up 🎉'}))
        .then(res => {
            User.fetch(user.username)
                .then(res => {
                    const token = generateToken(res);
                    response.status(200).json({message: 'successfully signed up 🎉', id: res.id, token: token});
                })
                // can probably do this without .find() by returning user in .signUp()
        })
        // will talk with front end to see if there is anything they want returned
        .catch(err => {
            response.status(500).json({message: 'error signing up'});
            console.log(err);
        });
});

// user sign in
app.post('/signin', validateUser, (request, response) => {
    const {username, password} = request.body;

    User.fetch(username)
        .then(res => {
            if (res && bcrypt.compareSync(password, res.password)) {
                const token = generateToken(res);
                response.status(200).json({message: 'successfully signed in', id: res.id, token: token});
            } else {
                response.status(500).json({message: 'invalid credentials'});
            };
        })
        .catch(err => {
            response.status(500).json({message: 'error signing in'});
            console.log(err);
        });
});

// validating body on sign up and sign in
function validateUser(request, response, next) {
    if (!request.body.username) {
        response.status(404).json({message: 'username missing from body'});
    } else if (!request.body.password) {
        response.status(404).json({message: 'password missing from body'});
    } else {
        next();
    };
};

// generating token
function generateToken(user) {
    const payload = {
        userId: user.id,
        username: user.username
    };

    const options = {
        expiresIn: '1d'
    };

    // will add secret to heroku environment variables
    return jwt.sign(payload, process.env.SECRET, options);
};

module.exports = app;