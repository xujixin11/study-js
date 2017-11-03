/**
 * 2017-9-27 Xu Jixin
 */
'use strict';

const knex = require('knex')({
  client: 'mysql',
});

module.exports = app => {
  app.beforeStart(function* () {
    const ctx = app.createAnonymousContext();
    const hasUser = yield app.mysql.query(knex.schema.hasTable('user').toString());
    if (hasUser.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('user', function(table) {
        table.increments();
        table.integer('user-id').notNullable();
        table.string('wechat').notNullable().defaultTo('');
        table.integer('mobile').notNullable();
        table.integer('times').notNullable().defaultTo(3);
        table.integer('type').notNullable().defaultTo(0);
        table.timestamp('creat_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });
      yield app.mysql.query(userSchema.toString());

      yield ctx.helper.unique(app, 'user', 'user-id');
      yield ctx.helper.unique(app, 'user', 'wechat');
      yield ctx.helper.unique(app, 'user', 'mobile');
    }
    const hasWorks = yield app.mysql.query(knex.schema.hasTable('works').toString());
    if (hasWorks.length === 0) {
      const worksSchema = knex.schema.createTableIfNotExists('works', function(table) {
        table.increments();
        table.integer('works-id').notNullable();
        table.integer('user-id').notNullable();
        table.string('status').notNullable().defaultTo('failed');
        table.string('model').notNullable().defaultTo('public');
        table.integer('poll').notNullable().defaultTo(0);
        table.timestamp('creat_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });
      yield app.mysql.query(worksSchema.toString());

      yield ctx.helper.unique(app, 'works', 'works-id');
      yield ctx.helper.unique(app, 'works', 'user-id');
    }
  });
};
