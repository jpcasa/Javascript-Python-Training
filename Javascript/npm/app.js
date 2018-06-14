const bcrypt = require('bcrypt');
const colors = require('colors');

const saltRounds = 10;
const password = 'not_bacon';

bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
        console.log(hash.green);
    });
});
