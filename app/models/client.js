async       = require("async");
var _       = require('lodash');
const clone = require('clone');
const Model = require('igo').Model;
const db    = require('igo').db;
var extend  = require('util')._extend;

const schema = {
  table:    'clients',
  columns:  [
    'id',
    'first_name',
    'last_name',
    'email',
    'phone',
    'created_at',
    'updated_at'
  ]
};

class Client {

  static search(params, callback) {
    let query = this.where(params);
    query.execute(function(error, results){
      callback(error, results);
    });
  }

  static getClientRquests(params, callback) {
    let ClientRequest = require('./client_request');
    let client_requests = [];
    this.search(params, function(error, clients) {
      async.forEachOf(clients, function(client, key, callback) {
          ClientRequest.getRequestsByClient(client.id, function(error, requests){
            client.requests = requests;
            client_requests[key] = client;
            callback();
          });
      }, function(error){
        if (error) console.error(err.message);
        callback(error, client_requests);
      });
    });
  }
}

module.exports = new Model(Client, schema);
