var express = require('express');
var router = express.Router();
var localStrategy = require("passport-local");
var passport = require("passport");
var userModel = require('./users');
const { getCountries, getStates } = require('country-state-picker');
var countries = getCountries();
var bookingModel = require('./booking');

passport.use(new localStrategy(userModel.authenticate()));

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/register', function (req, res) {
  var registeredUser = new userModel({
    username: req.body.username,
    mobile: req.body.mobile
  })
  userModel.register(registeredUser, req.body.password)
    .then(function (u) {
      passport.authenticate('local')(req, res, function () {
        res.redirect('/booking');
      })
    })
})

router.post('/login', passport.authenticate('local', {
  successRedirect: '/booking',
  failureRedirect: '/'
}), function (req, res) { });

router.get('/logout', function (req, res, next) {
  req.logout(function (err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  else {
    res.redirect('/register');
  }
}

router.get('/register', (req, res) => {
  res.render('register');
})

router.get('/booking', isLoggedIn, (req, res) => {
  res.render('booking', {countries})
})

router.get('/userlogin', isLoggedIn, (req, res) => {
  res.render('login.ejs')
})

router.post('/bookingdets', isLoggedIn, (req, res) => {
  bookingModel.create({
    sendername: req.body.sendername,
    sendermobile: req.body.sendermobile,
    sendercountry: req.body.sendercountry,
    senderstate: req.body.senderstate,
    sendercity: req.body.sendercity,
    senderpincode: req.body.senderpincode,
    senderaddress: req.body.senderaddress,
    recievername: req.body.recievername,
    recievermobile: req.body.recievermobile,
    recievercountry: req.body.recievercountry,
    recieverstate: req.body.recieverstate,
    recievercity: req.body.recievercity,
    recieverpincode: req.body.recieverpincode,
    recieveraddress: req.body.recieveraddress
  }).then((bookingdets) => {
    res.redirect("back")
    console.log(bookingdets);
  })
})

module.exports = router;
