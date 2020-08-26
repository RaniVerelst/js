
//starten/require mongoose
const mongoose = require('mongoose');
//require schema om mongoose schema te declareren
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');


//user mag nieuw schema bevatten
const User = new Schema({});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);