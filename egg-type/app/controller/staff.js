/**
 * 2017-10-07 Xu Jixin
 */
'use strict';

module.exports = app => {
  class StaffController extends app.Controller {
    * create() {
      this.ctx.body = yield this.service.staff.create(this.ctx.request.body);
    }
    * delete() {
      this.ctx.body = yield this.service.staff.delete(this.ctx.request.body);
    }
    * select() {
      this.ctx.body = yield this.service.staff.select(this.ctx.request.body);
    }
    * update() {
      this.ctx.body = yield this.service.staff.update(this.ctx.request.body);
    }
  }
  return StaffController;
};
