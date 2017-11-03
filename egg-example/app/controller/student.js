/**
 * 2017-9-25 Xu Jixin
 */
'use strict';

module.exports = app => {
  class StudentController extends app.Controller {
    * create() {
      this.ctx.body = yield this.service.student.create(this.ctx.request.body);
    }
    * delete() {
      this.ctx.body = yield this.service.student.delete(this.ctx.request.body);
    }
    * select() {
      this.ctx.body = yield this.service.student.select();
    }
    * update() {
      this.ctx.body = yield this.service.student.update(this.ctx.request.body);
    }
    * get() {
      this.ctx.body = yield this.service.student.get();
    }
  }
  return StudentController;
};
