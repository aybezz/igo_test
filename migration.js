// var db     = require('igo').db;
var mysql  = require('mysql');
var config = {};

try {
   require(process.cwd() + '/app/config').init(config);
 } catch (err) {
   console.log(err);
 }
//
var database = config.mysql.database;
config.mysql.database = null;
var pool   = mysql.createPool(config.mysql);

var DROP_DATABASE   = 'DROP DATABASE IF EXISTS `' + database + '`;';
var CREATE_DATABASE = 'CREATE DATABASE `' + database + '`;';

// TODO use igo.db to run the folowing commandes!!
pool.getConnection(function(err, connection) {
  connection.query(DROP_DATABASE, function(err, res) {
    connection.query(CREATE_DATABASE, function(err, res) {
      // config.mysql.database = database;
      console.log( 'Mysql DB: "' + database + '" Is ready to use !!');
      connection.release();
      process.exit();
    });
  });
});
