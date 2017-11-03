/**
 * 2017-9-25 Xu Jixin
 */
'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1506131710016_1399';

  // add your config here
  config.middleware = [];

  config.security = {
    csrf: {
      ignoreJSON: true,
    },
  };
  config.mysql = {
    client: {

      host: '127.0.0.1',

      port: '3306',

      user: 'root',

      password: '111111',

      database: 'test',
    },

    app: true,

    agent: false,
  };

  return config;
};
