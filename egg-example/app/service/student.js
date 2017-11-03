/**
 * 2017-9-25 Xu Jixin
 */
'use strict';

module.exports = app => {
  class Student extends app.Service {
    * create(param) {
      try {
        yield app.mysql.insert('student', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * select() {
      let res;
      try {
        res = yield app.mysql.select('student');
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }
    * delete(param) {
      try {
        yield app.mysql.delete('student', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * update(param) {
      try {
        yield app.mysql.update('student', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * get() {
      const conn = yield app.mysql.beginTransaction();
      try {
        yield conn.update('student', { id: 1, sno: 1 });
        yield conn.update('student', { id: 10, sno: 1 });
        yield conn.insert('student', { id: 18, sno: 15 });
        yield conn.update('student', { id: 1, sno: 'w' });
        yield conn.commit();
      } catch (e) {
        yield conn.rollback();
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
  }
  return Student;
};
