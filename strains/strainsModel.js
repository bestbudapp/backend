const database = require('../database/config');

const fetch = (limit , offset) => {
    return database('strains').limit(limit).offset(offset);
};

const fetchBy = (filter, query, limit, offset) => {
    return database('strains').whereRaw(`LOWER(${filter}) LIKE ?`, [`%${query}%`]).limit(limit).offset(offset);
};

const fetchById = id => {
    return database('strains').where({id}).first();
};

module.exports = {
    fetch,
    fetchBy,
    fetchById
};