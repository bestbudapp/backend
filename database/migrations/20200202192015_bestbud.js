exports.up = (knex, Promise) => {
    return knex.schema
        .createTable('users', table => {
            table.increments();
            table.string('username')
                .notNullable()
                .unique();
            table.string('password')
                .notNullable();
        })

        .createTable('strains', table => {
            table.integer('id');
            table.string('name');
            table.string('flavors');
            table.string('race');
            table.string('positive_effects');
            table.string('negative_effects');
            table.string('medical_uses');
            table.string('rating');
            table.string('description', 4000);
        })
};

exports.down = (knex, Promise) => {
    return knex.schema
        .dropTableIfExists('strains')
        .dropTableIfExists('users');
};