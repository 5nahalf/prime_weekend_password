var express = require('express');
var router = express.Router();
var path = require('path');
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.resolve(__dirname, '../views/index.html'));
});
/* Authenticate user*/
router.post('/', passport.authenticate('local', {
  successRedirect: '/users',
  failureRedirect: '/'
}));

module.exports = router;
