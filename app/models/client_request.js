async       = require("async");
const Model = require('igo').Model;

const schema = {
  table:    'clients_requests',
  columns:  [
    'id',
    'agent_id',
    'client_id',
    'request_type_id',
    'request_text',
    'created_at',
    'updated_at'
  ]
};

class ClientRequest {

  static getRequestsByClient(clientId, callback) {
    let Agent = require('./agent');
    let RequestType = require('./request_type');

    let requests_with_agent = [];
    let query = this.where({client_id: clientId});
    query.execute(function(error, requests) {
      async.forEachOf(requests, function(request, key, callback) {
        Agent.find(request.agent_id, function(error, agent){
          requests[key].agent = agent;
          RequestType.find(request.request_type_id, function(error, request_type){
            requests[key].request_type = request_type;
            callback();
          });
        });
      }, function(error) {
        // console.log('done');
        if (error) console.error(err.message);
        callback(error, requests);
      });
    });
  }

}

module.exports = new Model(ClientRequest, schema);
