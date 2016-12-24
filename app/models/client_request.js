async             = require("async");
const Model       = require('igo').Model;
// var Client     = require('./client');
const Agent       = require('./agent');
const RequestType = require('./request_type');


const schema = {
  table: 'clients_requests',
  columns: [
    'id',
    'agent_id',
    'client_id',
    'request_type_id',
    'request_text',
    'created_at',
    'updated_at'
  ],
  associations: [
    [ 'belongs_to', 'agent', Agent, 'agent_id', 'id'],
    // [ 'belongs_to', 'client', Client, 'client_id', 'id'],
    [ 'belongs_to', 'request_type', RequestType, 'request_type_id', 'id'],
  ],
  scopes: {
    default: function(query) { query.includes(['request_type', 'agent']);},
  }
};

const ClientRequest = function() {

};

module.exports = new Model(ClientRequest, schema);
