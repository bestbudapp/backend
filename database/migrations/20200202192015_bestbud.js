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
            table.increments();
            table.string('name');
            table.string('flavors');
            table.string('race');
            table.string('positive_effects');
            table.string('negative_effects');
            table.string('medical_uses');
            table.float('rating');
            table.text('description');
        })
};

exports.down = (knex, Promise) => {
    return knex.schema
        .dropTableIfExists('strains')
        .dropTableIfExists('users');
};