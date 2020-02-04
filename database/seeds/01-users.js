exports.seed = (knex, Promise) => {
	return knex('users').insert([
		{
			username: 'jackBarry@test.com',
			password: 'password'
		}
	]);
};