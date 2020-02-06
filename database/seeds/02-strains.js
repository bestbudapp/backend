const csv = require('csvtojson');

exports.seed = (knex, Promise) => {
	return csv({
        trim: true,
        headers: ["id", "name", "flavors", "race", "positive_effects", "negative_effects", "medical_uses", "rating", "description"],
        delimiter: "%"
	})
		.fromFile("./database/seeds/strains.csv")
		.then(jsonObj => {
			return knex('strains').insert(jsonObj);
		});
};