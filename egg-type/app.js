/**
 * 2017-10-07 Xu Jixin
 */
'use strict';

const knex = require('knex')({
  client: 'mysql',
});

module.exports = app => {
  app.beforeStart(function* () {
    const ctx = app.createAnonymousContext();
    const hasStaff = yield app.mysql.query(knex.schema.hasTable('staff').toString());
    if (hasStaff.length === 0) {
      const staffSchema = knex.schema.createTableIfNotExists('staff', function(table) {
        table.increments();
        table.integer('staffid').notNullable();
        table.bigInteger('mobile').notNullable();
        table.string('name', 4).notNullable();
        table.decimal('salary').notNullable().defaultTo(0);
        table.boolean('family').notNullable().defaultTo('false');
        table.timestamp('creat_at').defaultTo(knex.fn.now());
        table.float('float', 4, 1).notNullable().defaultTo(0);
        table.date('date').notNullable().defaultTo('2017-10-07');
        table.dateTime('dateTime').notNullable().defaultTo('2017-10-07 15:44');
        table.time('time').notNullable().defaultTo('15:44');
        table.charset('utf8');
      });
      yield app.mysql.query(staffSchema.toString());

      yield ctx.helper.unique(app, 'staff', 'staffid');
      yield ctx.helper.unique(app, 'staff', 'mobile');
      yield ctx.helper.unique(app, 'staff', 'name');
    }
  });
};
