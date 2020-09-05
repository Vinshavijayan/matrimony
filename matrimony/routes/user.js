var express = require('express');
var router = express.Router();
var passport = require('passport');
var csrf = require('csurf');

var csrfProtection = csrf();
router.use(csrfProtection);

router.get('/login', function(req, res, next) {
  
    res.render('user/login');
  });

  router.post('/login', passport.authenticate('local.login', {
    successRedirect: 'user/uprofile',
    failureRedirect: '/',
    failureRedirect: true
  
  }));

  router.get('/register', function(req, res, next) {
   var messages = req.flash('error');
     res.render('user/register',{csrfToken: req.csrfToken() , messages : messages , hasErrors : messages.length>0 });
   });

   
  router.post('/register', passport.authenticate('local.register', {
    successRedirect: 'user/uprofile',
    failureRedirect: '/',
    failureRedirect: true
  
  }));
  
   router.get('/uprofile', function(req, res, next) {
   
    res.render('user/uprofile');
  });
 
  router.get('/smart', function(req, res, next) {
   
    res.render('user/smart');
  });
 
  router.get('/occupational', function(req, res, next) {
   
    res.render('user/occupational');
  });
 
  router.get('/educational', function(req, res, next) {
   
    res.render('user/educational');
  });
 
  router.get('/location', function(req, res, next) {
   
    res.render('user/location');
  });
 
  router.get('/pprofile', function(req, res, next) {
   
    res.render('user/pprofile');
  });

  router.get('/list', function(req, res, next) {
   
    res.render('user/list');
  });

  router.get('/about', function(req, res, next) {
   
    res.render('user/about');
  });

  router.get('/payment', function(req, res, next) {
   
    res.render('user/payment');
  });

  router.get('/psuccess', function(req, res, next) {
   
    res.render('user/psuccess');
  });

  router.get('/response', function(req, res, next) {
   
    res.render('user/response');
  });

  router.get('/rprofile', function(req, res, next) {
   
    res.render('user/rprofile');
  });

  router.get('/match', function(req, res, next) {
   
    res.render('user/match');
  });

  router.get('/logout', function(req, res, next) {
   
    res.render('index');
  });

  router.get('/about', function(req, res, next) {
   
    res.render('user/about');
  });

  router.get('/profilem', function(req, res, next) {
   
    res.render('user/profilem');
  });

  router.get('/horoscope', function(req, res, next) {
   
    res.render('user/horoscope');
  });

  router.get('/rdesign', function(req, res, next) {
   
    res.render('user/rdesign');
  });

  router.get('/collection', function(req, res, next) {
   
    res.render('user/collection');
  });

  router.get('/purchase', function(req, res, next) {
   
    res.render('user/purchase');
  });

  router.get('/event', function(req, res, next) {
   
    res.render('user/event');
  });
  module.exports = router;
  