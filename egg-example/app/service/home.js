/**
 * 2017-9-24 Xu Jixin
 */
'use strict';
const _ = require('lodash');

module.exports = app => {
  class Home extends app.Service {
    * find() {
      return 'user';
    }
    * sina() {
      return yield app.curl('http://www.sina.com.cn');
    }
    * sohu() {
      return yield app.curl('http://www.sohu.com.cn');
    }
    * baidu() {
      return yield app.curl('http://www.baidu.com.cn');
    }
    * test() {
      return 'abc';
    }
    * ppap() {
      return '123';
    }
    * look() {
      return _.pull([ 'a', 'b', 'c', 'a', 'b', 'c' ], 'a', 'c');
    }
    * look1() {
      return _.zip([ 'a', 'b' ], [ 1, 2 ], [ true, false ]);
    }
    * date() {
      const a = new Date();
      return `${a.getFullYear()}-${this.format(a.getMonth() + 1)}-${this.format(a.getDate())} ${this.format(a.getHours())}:${this.format(a.getMinutes())}:${this.format(a.getSeconds())}`;
    }
    format(b) {
      if (b < 10) {
        return '0' + b;
      }
      return b;
    }
  }
  return Home;
};
