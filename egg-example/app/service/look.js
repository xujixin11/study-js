/**
 * 2017-9-24 Xu Jixin
 */
'use strict';

const _ = require('lodash');


module.exports = app => {
  class Look extends app.Service {
    * look() {
      return _.pull([ 'a', 'b', 'c', 'a', 'b', 'c' ], 'a', 'c');
    }
    * look1() {
      return _.zip([ 'a', 'b' ], [ 1, 2 ], [ true, false ]);
    }
  }
  return Look;
};
