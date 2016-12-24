
const Model         = require('igo').Model;
const ClientRequest = require('./client_request');

const schema = {
  table: 'clients',
  columns: [
    'id',
    'first_name',
    'last_name',
    'email',
    'phone',
    'created_at',
    'updated_at'
  ],
  associations: [
    ['has_many', 'requests', ClientRequest, 'id', 'client_id'],
  ],
  scopes: {
    default: function(query) { query.includes(['requests']);},
  }
};

const Client = function() {

};

module.exports = new Model(Client, schema);
