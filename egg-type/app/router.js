/**
 * 2017-10-07 Xu Jixin
 */
'use strict';

module.exports = app => {

  app.post('/create', 'staff.create');
  app.post('/delete', 'staff.delete');
  app.post('/select', 'staff.select');
  app.post('/update', 'staff.update');

};
