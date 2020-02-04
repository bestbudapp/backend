const path = require('path');
const seeder = require('knex-seed-file');

exports.seed = (knex, Promise) => {
	return seeder(knex, './test.csv', 'strains',
		{
			mapTo: ['id', 'name', 'flavors', 'race', 'positive_effects', 'negative_effects', 'medical_uses', 'rating', 'description'],
			columnSeparator: '%',
			rowSeparator: '\r',
			ignoreFirstLine: true
		}
	);
};