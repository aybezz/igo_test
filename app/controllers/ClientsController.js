
module.exports.index = function(req, res, next) {
  let Client = require('../models/client');
  var params = req.query.phone ? { phone: req.query.phone } : { };
  Client.where(params).list(function(err, clients) {
    res.render('clients/index', {clients, phone: req.query.phone});
  });
};

module.exports.create_order_step1 = function(req, res) {
  res.render('clients/create_order');
};

module.exports.create_order_step2 = function(req, res) {
  // Validation
  req.checkBody('phone', 'Numéro de téléphone requis').notEmpty();
  var errors = req.validationErrors();

  if(errors){
    res.render('clients/create_order', {
      errors: errors
    });
  }
  else {
    let Client = require('../models/client');
    Client.where({ phone: req.body.phone }).limit(1).list(function(err, client){
      if(client === null)
        res.render('clients/new', { client: {phone: req.body.phone} });
      else res.render('clients/edit', {client});
    });
  }
};

module.exports.new = function(req, res) {
  let newClient = req.body.client;

  req.checkBody('client.phone', 'Numéro de téléphone requis').notEmpty();
  req.checkBody('client.request_type_id', 'Type de demande requis').notEmpty();

  var errors = req.validationErrors();
  if(errors){
    res.render('clients/new', {
      errors: errors,
      client: newClient
    });
  }
  else {
    let Client    = require('../models/client');

    Client.create({
      first_name: newClient.first_name,
      last_name: newClient.last_name,
      phone: newClient.phone,
      email: newClient.email,
      created_at: new Date()
    }, function(err, client) {
      let ClientRequest = require('../models/client_request');
      ClientRequest.create({
        agent_id: req.user.id,
        client_id: client.id,
        request_type_id: newClient.request_type_id,
        request_text: newClient.request_text,
        created_at: new Date()
      }, function(err, client_request) {
        console.log('New ClientRequest Created.', client_request);
        res.redirect('/clients/?phone=' + client.phone);
      });
    });
  }
};

module.exports.edit = function(req, res) {

  let newClient = req.body.client;
  newClient.id  = req.params.id;

  req.checkBody('client.phone', 'Numéro de téléphone requis').notEmpty();
  req.checkBody('client.request_type_id', 'Type de demande requis').notEmpty();

  var errors = req.validationErrors();
  if(errors) {
    res.render('clients/edit', {
      errors: errors,
      client: newClient
    });
  }
  else {
    let Client = require('../models/client');

    Client.find(req.params.id, function (error, client) {
      if(error) throw console.log(error);
      client.update({
        first_name: newClient.first_name,
        last_name: newClient.last_name,
        phone: newClient.phone,
        email: newClient.email,
        updated_at: new Date()
      }, function(err, client) {
        let ClientRequest = require('../models/client_request');
        ClientRequest.create({
          agent_id: req.user.id,
          client_id: client.id,
          request_type_id: newClient.request_type_id,
          request_text: newClient.request_text,
          created_at: new Date()
        }, function(err, client_request) {
          console.log('New ClientRequest Created.', client_request);
          res.redirect('/clients/?phone=' + client.phone);
        });
      });
    });
  }
};
