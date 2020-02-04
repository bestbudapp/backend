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
            table.integer('id')
                .unique();
            table.string('name');
            table.string('flavors');
            table.string('race');
            table.string('positive_effects');
            table.string('negative_effects');
            table.string('medical_uses');
            table.string('rating');
            table.string('description', 4000);
        })

        .createTable('cabinet', table => {
            table.increments();
            table.integer('user_id')
                .notNullable()
                .unsigned()
                .references('id')
                .inTable('users')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            table.integer('strain_id')
                .notNullable()
                .unsigned()
                .references('id')
                .inTable('strains');
            // cascade? strain information won't be modified
        })
};

exports.down = (knex, Promise) => {
    return knex.schema
        .dropTableIfExists('strains')
        .dropTableIfExists('users');
};