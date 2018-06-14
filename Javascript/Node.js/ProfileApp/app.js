// Request the Profile Module
const profile = require('./profile');

// Get Users as args
const users = process.argv.slice(2);

// Loops through each user and gets the user profile
users.forEach(profile.get);
