const bcrypt = require('bcryptjs');

exports.seed = (knex, Promise) => {
    const hashedPassword = bcrypt.hashSync('password', 10);

	return knex('users').insert([
		{
			username: 'jackBarry@test.com',
			password: hashedPassword
		}
	]);
};
