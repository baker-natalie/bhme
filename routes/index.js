var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Black Hall ME' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Us'});
});
router.get('/capabilities', function(req, res, next) {
  res.render('capabilities', { title: 'Capabilities'});
});
router.get('/procurement', function(req, res, next) {
  res.render('procurement', { title: 'Procurement'});
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact'});
});

module.exports = router;
