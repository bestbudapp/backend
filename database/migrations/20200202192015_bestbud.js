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

        .createTable('recommended_strains', table => {
            table.increments();
            table.integer('user_id')
                .notNullable()
                .unsigned()
                .references('id')
                .inTable('users')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            table.string('user_input')
                .notNullable();
            table.string('recommended_strain_ids')
                .notNullable();
        });
};

exports.down = (knex, Promise) => {
    return knex.schema
        .dropTableIfExists('recommended_strains')
        .dropTableIfExists('cabinet')
        .dropTableIfExists('strains')
        .dropTableIfExists('users');
};