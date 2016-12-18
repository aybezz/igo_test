
module.exports.init = function(config) {

  // modify secret keys
  config.signedCookiesSecret = 'abcdefghijklmnopqrstuvwxyz';
  config.cookieSessionConfig = {
    name: 'session',
    keys: ['key1', 'key2']
  };
  config.mysql = {
    host     : process.env.MYSQL_HOST     || 'localhost',
    port     : process.env.MYSQL_PORT     || 3306,
    user     : process.env.MYSQL_USERNAME || 'dbuser',
    password : process.env.MYSQL_PASSWORD || 'dbuserpwd',
    database : process.env.MYSQL_DATABASE || 'igo_test',
    debug    : false,
    connectionLimit : 5
  };

  config.redis = {
    // host:     process.env.REDIS_HOST      || 'localhost',
    // port:     process.env.REDIS_PORT      || 6379,
    // database: process.env.REDIS_DATABASE  || 0
  };

};
