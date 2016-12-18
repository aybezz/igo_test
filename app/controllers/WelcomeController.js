

//
module.exports.index = function(req, res) {
  console.log('Welcome: ',req.user);
  res.render('welcome/index');
};
