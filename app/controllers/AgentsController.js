
var passport      = require('passport');
var LocalStrategy = require('passport-local').Strategy;
let Agent         = require('../models/agent');

//
module.exports.login = function(req, res) {
  res.render('agents/login');
};

module.exports.loginPOST = function(req, res, next) {
  // passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login' });

  passport.authenticate('local',
   function(err, user, info) {
    if (err) { console.log(err); }
    if (!user) { return res.redirect('/login'); }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      req.flash('success_msg', 'Bienvenue, Vous êtes connecté');
      return res.redirect('/clients/create_order_step1');
    });

  })(req, res, next);
};

module.exports.logout = function(req, res) {
  req.logout();
	req.flash('success_msg', 'Vous êtes déconnecté avec succès');
	res.redirect('/login');
};

module.exports.register = function(req, res) {
  res.render('agents/register');
};

module.exports.registerPOST = function(req, res) {
  var newAgent = req.body.agent;

  // Validation
  req.checkBody('agent.name', 'Nom requis').notEmpty();
  req.checkBody('agent.login', 'Login requis').notEmpty();
  req.checkBody('agent.password', 'Mot de passe requis').notEmpty();
  req.checkBody('agent.passwordConfirm', 'Les mots de passe ne correspondent pas').equals(newAgent.password);

  var errors = req.validationErrors();

  if(errors){
    res.render('agents/register', {
      errors: errors,
      agent: newAgent
    });
  } else {
    Agent.createAgent(newAgent, function(err, agent){
      if(err) throw err;
      // console.log(agent);
    });

    req.flash('success_msg', 'Vous êtes inscrit et pouvez maintenant vous connecter');
    res.redirect('/login');
  }
};

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    Agent.find(id, function(err, user) {
      done(err, user);
    });
});

passport.use(new LocalStrategy({
    usernameField: 'login',
    passwordField: 'password'
  },
  function(username, password, done) {
    Agent.getAgentByLogin(username, function(err, user) {
      if (err) throw err;
      if (!user) {
        return done(null, false, {
          message: 'Agent inconnu'
        });
      }
      Agent.comparePassword(password, user.password, function(err, isMatch) {
        if (err) throw err;
        if (isMatch) {
          return done(null, user);
        } else {
          return done(null, false, {
            message: 'Mot de passe incorrect'
          });
        }
      });
  });
}));
