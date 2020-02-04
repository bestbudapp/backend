import seeder from 'knex-csv-seeder';

exports.seed = seeder({
	table: 'users',
	file: '../../test.csv'
});