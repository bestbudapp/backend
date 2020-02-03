const database = require('../database/config');

// user sign up
const signUp = user => {
    return database('users').insert(user);
};

module.exports = {
    signUp
};