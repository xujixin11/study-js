/**
 * 2017-9-26 Xu Jixin
 */
'use strict';

module.exports = app => {
  app.get('/sina', 'home.sina');
  app.get('/sohu', 'home.sohu');
  app.get('/baidu', 'home.baidu');
  app.get('/test', 'home.test');
  app.get('/ppap', 'home.ppap');
  app.get('/car', 'home.car');
  app.get('/bike', 'home.bike');
  app.get('/age', 'home.age');
  app.post('/age', 'home.age');
  app.post('/look', 'home.look');
  app.post('/date', 'home.date');
  app.post('/lodash', 'home.find');

  app.post('/create', 'test.create');
  app.post('/delete', 'test.delete');
  app.post('/select', 'test.select');
  app.post('/update', 'test.update');

  app.post('/create1', 'student.create');
  app.post('/delete1', 'student.delete');
  app.post('/select1', 'student.select');
  app.post('/update1', 'student.update');
  app.post('/get1', 'student.get');

  app.post('/create2', 'teacher.create');
  app.post('/delete2', 'teacher.delete');
  app.post('/select2', 'teacher.select');
  app.post('/update2', 'teacher.update');
};
