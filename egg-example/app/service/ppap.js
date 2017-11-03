/**
 * 2017-9-24 Xu Jixin
 */
'use strict';

module.exports = app => {
  class Ppap extends app.Service {
    * ppap() {
      return '456';
    }
  }
  return Ppap;
};
