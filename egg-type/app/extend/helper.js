/**
 * 2017-10-07 Xu Jixin
 */
'use strict';

const knex = require('knex')({
  client: 'mysql',
});
module.exports = {
  * unique(app, table, column) {
    const schema = knex.schema.alterTable(table, function(t) {
      t.unique(column);
    });
    yield app.mysql.query(schema.toString());
  },
};
