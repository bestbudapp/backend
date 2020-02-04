const database = require('../database/config');

const test = () => {
    return database('strains');
};

module.exports = {
    test
};