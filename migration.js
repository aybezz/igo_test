// DB MIGRATION
var db = require('igo').db;
var config = require('igo').config;

// CONFIG
config.init();
var database = config.mysql.database;
config.mysql.database = null;

// DB
db.init(config);

// SQL
var DROP_DATABASE   = 'DROP DATABASE IF EXISTS `' + database + '`;';
var CREATE_DATABASE = 'CREATE DATABASE `' + database + '`;';

db.query(DROP_DATABASE, function() {
  db.query(CREATE_DATABASE, function() {
    config.mysql.database = database;
    db.init(config);
    db.migrate(function() {
      console.log( 'Mysql DB: "' + database + '" is ready to use !!');
       process.exit(1);
    });
  });
});
