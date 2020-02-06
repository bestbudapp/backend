const database = require('../database/config');

const fetch = array => {
    return database('strains').where(builder => builder.whereIn('id', array));
};

module.exports = {
    fetch
};