var bcrypt  = require('bcryptjs');
const Model = require('igo').Model;
// const ClientRequest = require('./client_request');

const schema = {
  table: 'agents',
  columns: [
    'id',
    'name',
    'login',
    'password',
    'created_at',
    'updated_at'
  ],
  // associations: [
  //   [ 'has_many', 'requests', ClientRequest, 'id', 'agent_id'],
  // ]
};

class Agent {

  static createAgent(newAgent, callback) {
  	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(newAgent.password, salt, function(err, hash) {
        newAgent.password = hash;
        Agent.create({
          name: newAgent.name,
          login: newAgent.login,
          password: newAgent.password,
          created_at: new Date()
        }, function(err, agent) {
          callback(err, agent);
        });
	    });
  	});
  }

  static getAgentByLogin(login, callback){

    let query = Agent.where({login: login});
    query.execute(function(error, results){
      let agent = results.length > 0 ? results[0] : null;
      callback(error, agent);
    });
  }

  static comparePassword(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
      if(err) throw err;
      callback(null, isMatch);
    });
   }
}

module.exports = new Model(Agent, schema);
