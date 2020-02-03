const database = require('../database/config');

// user sign up
const signUp = user => {
    return database('users').insert(user);
};

// fetch user
const fetch = username => {
    return database('users').where({username}).first();
};

module.exports = {
    signUp,
    fetch
};