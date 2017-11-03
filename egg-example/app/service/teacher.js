/**
 * 2017-9-26 Xu Jixin
 */
'use strict';

module.exports = app => {
  class Teacher extends app.Service {
    * create(param) {
      try {
        yield app.mysql.insert('teacher', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * select() {
      let res;
      try {
        res = yield app.mysql.select('teacher');
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }
    * delete(param) {
      try {
        yield app.mysql.delete('teacher', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * update(param) {
      try {
        yield app.mysql.update('teacher', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
  }
  return Teacher;
};
