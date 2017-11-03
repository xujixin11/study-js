/**
 * 2017-9-24 Xu Jixin
 */
'use strict';

const knex = require('knex')({
  client: 'mysql',
});
module.exports = {
  foo(a, b) {
    return a * 1 + b * 1;
  },
  bike(a) {
    return a;
  },
  age() {
    return '123';
  },
  * unique(app, table, column) {
    const schema = knex.schema.alterTable(table, function(t) {
      t.unique(column);
    });
    yield app.mysql.query(schema.toString());
  },
};
