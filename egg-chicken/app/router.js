/**
 * 2017-9-29 Xu Jixin
 */
'use strict';

module.exports = app => {
  app.post('/user/register', 'user.register');
  app.post('/user/login', 'user.login');

  app.post('/mobile/set', 'mobile.set');
  app.post('/mobile/update', 'mobile.update');

  app.post('/works/upload', 'works.upload');
  app.post('/works/look', 'works.look');
  app.post('/works/vote', 'works.vote');
};
