

var WelcomeController   = require('./controllers/WelcomeController');
var AgentsController   = require('./controllers/AgentsController');
var ClientsController   = require('./controllers/ClientsController');

//
module.exports.init = function(app) {

  // Auth/Reg
  app.get('/login', AgentsController.login);
  app.post('/login', AgentsController.loginPOST);
  app.get('/register', AgentsController.register);
  app.post('/register', AgentsController.registerPOST);
  app.get('/logout', AgentsController.logout);

  //
  app.get('/', ensureAuthenticated, WelcomeController.index);

  // Clients routes
  app.get('/clients', ensureAuthenticated, ClientsController.index);
  app.get('/clients/create_order_step1', ensureAuthenticated, ClientsController.create_order_step1);
  app.post('/clients/create_order_step2', ensureAuthenticated, ClientsController.create_order_step2);
  app.post('/clients/new', ensureAuthenticated, ClientsController.new);
  app.post('/clients/:id/edit', ensureAuthenticated, ClientsController.edit);

};

function ensureAuthenticated(req, res, next) {
	if(req.isAuthenticated()) {
		return next();
	} else {
		req.flash('error_msg','Veuillez vous connecter pour pouvoir accéder à la page demandée');
		res.redirect('/login');
	}
  // next();
}
