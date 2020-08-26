//passport laden
//hoe een gebruiker mag aanloggen of registreren
const User = require('../models/User');
const passport = require('passport');
const config = require('config');

// use static authenticate method of model in LocalStrategy
//passpoort is geladen en die mag een lokale strategie gebruiken
//querries om te registreren en aanloggen 

passport.use(User.createStrategy());

// use static serialize and deserialize of model for passport session support
//gebruiker naar string of omgekeerd word uitgelezen uit een sessie
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//WEBTOKEN STRATEGY (JWT)

var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
var opts = {}
//key uit headers haalen
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.get('jwt.secret');

passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
    User.findOne({ _id: jwt_payload.uid }, function (err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));

module.exports = passport;
