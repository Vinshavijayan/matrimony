var express = require('express');
var router = express.Router();

router.get('/login', function(req, res, next) {
  
    res.render('admin/login');
  });

  router.get('/register', function(req, res, next) {
  
    res.render('admin/register');
  });

  router.get('/aprofile', function(req, res, next) {
  
    res.render('admin/aprofile');
  });

  router.get('/users', function(req, res, next) {
  
    res.render('admin/users');
  });

  router.get('/uprofile', function(req, res, next) {
  
    res.render('admin/uprofile');
  });

  router.get('/edit', function(req, res, next) {
  
    res.render('admin/uprofile');
  });

  router.get('/blocked', function(req, res, next) {
  
    res.render('admin/blocked');
  });

  router.get('/response', function(req, res, next) {
  
    res.render('admin/response');
  });

  module.exports = router;