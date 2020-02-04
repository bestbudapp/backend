const database = require('../database/config');

// add strain to user's cabinet
const add = (user_id, strain_id) => {
    return database('cabinet').insert({user_id: user_id, strain_id: strain_id});
};

// fetch user's cabinet
const fetch = id => {
    return database('cabinet')
        .join('strains', 'cabinet.strain_id', '=', 'strains.id')
        .select('cabinet.id AS cabinet_id','strains.id AS strain_id', 'strains.name', 'strains.flavors', 'strains.race', 'strains.positive_effects', 'strains.negative_effects', 'strains.medical_uses', 'strains.rating', 'strains.description')
        .where('cabinet.user_id', id);
};

// delete strain from user's cabinet
const remove = (id) => {
    return database('cabinet')
        .where({id})
        .del();
};

module.exports = {
    add,
    fetch,
    remove
};