const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  favoriteBook: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  }
});

UserSchema.statics.authenticate = function(email, password, callback) {
  User.findOne({ email: email })
    .exec(function (error, user) {
      if (error) {
        return callback(error);
      } else if ( !user ) {
        var err = new Error('Email and password are required');
        err.status = 401;
        return callback(err);
      }
      bcrypt.compare(password, user.password, function(error, result) {
        if (result === true) {
          return callback(null, user);
        } else {
          return callback();
        }
      });
    });
}

// Do something before something is created in Mongo
UserSchema.pre('save', function(next) {
  bcrypt.hash(this.password, 4, (error, hash) => {
    if (error) {
      return next(error);
    }
    this.password = hash;
    console.log(this.password);
    next();
  });
});

// User with User Schema
const User = mongoose.model('User', UserSchema);
module.exports = User;
