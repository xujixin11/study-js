/**
 * 2017-9-26 Xu Jixin
 */
'use strict';

module.exports = app => {
  class TeacherController extends app.Controller {
    * create() {
      this.ctx.body = yield this.service.teacher.create(this.ctx.request.body);
    }
    * delete() {
      this.ctx.body = yield this.service.teacher.delete(this.ctx.request.body);
    }
    * select() {
      this.ctx.body = yield this.service.teacher.select(this.ctx.request.body);
    }
    * update() {
      this.ctx.body = yield this.service.teacher.update(this.ctx.request.body);
    }
  }
  return TeacherController;
};
