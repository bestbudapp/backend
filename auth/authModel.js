const database = require('../database/config');

// user sign up
const signUp = user => {
    return database('users').insert(user);
};

const find = username => {
    return database('users').where(username).first();
};

module.exports = {
    signUp,
    find
};