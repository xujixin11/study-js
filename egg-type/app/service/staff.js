/**
 * 2017-10-07 Xu Jixin
 */
'use strict';

module.exports = app => {
  class Staff extends app.Service {
    * create(param) {
      try {
        yield app.mysql.insert('staff', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * select() {
      let res;
      try {
        res = yield app.mysql.select('staff');
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }
    * delete(param) {
      try {
        yield app.mysql.delete('staff', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * update(param) {
      try {
        yield app.mysql.update('staff', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
  }
  return Staff;
};
