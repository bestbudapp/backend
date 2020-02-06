exports.seed = (knex, Promise) => {
	return knex('cabinet').insert([
		{
			user_id: 1,
			strain_id: 887
		},
		{
			user_id: 1,
			strain_id: 948
		},
		{
			user_id: 1,
			strain_id: 528
		},
		{
			user_id: 1,
			strain_id: 1044
		},
		{
			user_id: 1,
			strain_id: 551
		}
	]);
};
