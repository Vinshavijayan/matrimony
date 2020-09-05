var passport = require('passport');
var User = require('../models/user');
var LocalStrategy = require('passport-local').Strategy;

 passport.serializeUser(function(user, done) {
done(null,user.id);
 });

 passport.deserializeUser(function(id, done) {
     User.findById(id,function(err, user) {
done(err,user);
     });
 });

//  passport.use('local.register', new LocalStrategy({
// usernameField: 'email',
// passwordField: 'password',
// passReqToCallback: true
//  }, function(req, email, password, done) {
//      User.findOne({'email': email}, function(err, user) {
//          if(err){
//              return done(err);
//          }
//          if(user){
//              return done(null, false, {message: 'Email is already in use.'});
//          }
//          var newUser = new User();
//          newUser.email = email;
//          newUser.password = newUser.encryptPassword(password);
//          newUser.save(function(err, result) {
//              if(err) {
//                  return done(err);
//              }
//              return done(null, newUser);
//          });
//      });


     passport.use('local.register',new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, function (req, email, password, done) {
        name = req.body.name;
        dateofbirth = req.body.dateofbirth;
        gender = req.body.gender;
        religion = req.body.religion;
        education = req.body.education;
        location = req.body.location;
        occupation = req.body.occupation;
        email = req.body.email;
        password = req.body.password;
        mobile = req.body.mobile;
    
        User.findOne({'email':email}, function (err, user) {
            console.log(email);
    
            if(err){
                console.log('err case');
                return done(err);
            }
            if(user){
                console.log('Email is already in use.');
                return done(null, false, {message: 'Email is already in use.'});
            }
            console.log('Creating New User');
    
            password = bcrypt.hashSync(password,bcrypt.genSaltSync(),null);
    
            User.get().collection('user').insertOne({
                name:name,
                dateofbirth:dateofbirth,
                gender:gender,
                religion:religion,
                education:education,
                location:location,
                occupation:occupation,
                email:email,
                password:password,
                mobile:mobile
            },function (err,data) {
                if(err){
                    return done(err);
                }
                return done(null, email)
            });
    
        });
    
    


 }));