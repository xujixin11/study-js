/**
 * 2017-9-29 Xu Jixin
 */
'use strict';

module.exports = app => {
  class User extends app.Service {
    * register() {
      try {
        yield app.mysql.insert('user');
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * login(wechat) {
      try {
        yield app.mysql.create('user', wechat);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * set(mobile) {
      try {
        yield app.mysql.set('user', mobile);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * update(mobile) {
      try {
        yield app.mysql.update('user', mobile);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
  }
  return User;
};
