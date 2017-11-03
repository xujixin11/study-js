/**
 * 2017-9-25 Xu Jixin
 */
'use strict';
const _ = require('lodash');

module.exports = app => {
  class Lodash extends app.Service {
    * countBy() {
      return `${_.countBy([ 6.1, 4.2, 6.3 ], Math.floor)}-${_.countBy([ 'one', 'two', 'three' ], 'length')}`;
    }
    * every() {
      const users = [
        { user: 'barney', age: 36, active: false },
        { user: 'fred', age: 40, active: false },
      ];
      return `${_.every([ true, 1, null, 'yes' ], Boolean)}-${_.every(users, { user: 'barney', active: false })}-${_.every(users, [ 'active', false ])}-${_.every(users, 'active')}`;
    }
    * filter() {
      const users = [
        { user: 'barney', age: 36, active: true },
        { user: 'fred', age: 40, active: false },
      ];
      return `${_.filter(users, function(o) { return !o.active; })}-${_.filter(users, { age: 36, active: true })}-${_.filter(users, [ 'active', false ])}-${_.filter(users, 'active')}`;
    }
    * find() {
      const users = [
        { user: 'barney', age: 36, active: true },
        { user: 'fred', age: 40, active: false },
        { user: 'pebbles', age: 1, active: true },
      ];
      return `${_.find(users, function(o) { return o.age < 40; })}-${_.find(users, { age: 1, active: true })}-${_.find(users, [ 'active', false ])}-${_.find(users, 'active')}`;
    }
  }
  return Lodash;
};
