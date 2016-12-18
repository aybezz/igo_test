//
var app           = require('igo').app;
var cookieSession = require('cookie-session');
var passport      = require('passport');
var expressValidator = require('express-validator');

app.use(cookieSession({name: 'session', keys: ['key1', 'key2'], maxAge: 60000 }));

// Passport init
app.use(passport.initialize());
app.use(passport.session());

// Global Vars
app.use(function (req, res, next) {
  res.locals.user = req.user || null;
  next();
});

app.run();

// Migrate db
require('igo').db.migrate(function() {
  // Load requests type from database
  let RequestType = require('./app/models/request_type');
  RequestType.all(function(err, requests_type) {
    app.locals.requests_type = requests_type;
  });
});
