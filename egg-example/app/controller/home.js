/**
 * 2017-9-24 Xu Jixin
 */
'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * sina() {
      const r = yield this.service.home.sina();
      this.ctx.body = r;
    }
    * sohu() {
      const a = yield this.service.home.sohu();
      this.ctx.body = a;
    }
    * baidu() {
      this.ctx.body = this.ctx.helper.foo(this.ctx.request.query.a, this.ctx.request.query.c);
    }
    * test() {
      const c = yield this.service.home.test();
      const d = yield this.service.test.test();
      this.ctx.body = c + d;
    }
    * ppap() {
      const e = yield this.service.home.ppap();
      const f = yield this.service.ppap.ppap();
      this.ctx.body = e + f;
    }
    * look() {
      const g = yield this.service.look.look();
      const h = yield this.service.look.look1();
      this.ctx.body = g + h;
    }
    * car(ctx) {
      const result = yield ctx.curl('https://registry.npm.taobao.org/egg/latest', {
        dataType: 'json',
        timeout: 3000,
      });
      ctx.body = {
        status: result.status,
        headers: result.headers,
        package: result.data,
      };
    }
    * bike() {
      this.ctx.body = this.ctx.helper.bike(this.ctx.request.query.b);
    }
    * age() {
      this.ctx.body = this.ctx.helper.age('age(1)');
    }
    * date() {
      this.ctx.body = yield this.service.home.date();
    }
    * find() {
      this.ctx.body = yield this.service.lodash.find();
    }
  }
  return HomeController;
};
