/**
 * 2017-9-29 Xu Jixin
 */
'use strict';

module.exports = app => {
  class Works extends app.Service {
    * upload(param) {
      try {
        yield app.mysql.insert('works', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * look(param) {
      try {
        yield app.mysql.delete('works', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * vote(param) {
      try {
        yield app.mysql.delete('works', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
  }
  return Works;
};
