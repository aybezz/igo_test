const Model = require('igo').Model;

const schema = {
  table:    'requests_type',
  columns:  [
    'id',
    'name',
    'created_at',
    'updated_at'
  ]
};

const RequestType = function() {

};

module.exports = new Model(RequestType, schema);
