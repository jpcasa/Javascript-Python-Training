// Problem: We need a simple way to look at a user's badge count and JavaScript points
// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out

// Include http and https modules
const https = require('https');
const http = require('http');

// Prints Message
function printMessage(username, badgeCount, points) {
  const message = `${username} has ${badgeCount} total badge(s) and ${points} points in Javascript`;
  console.log(message);
}

// Prints Error
function printError(error) {
  console.error(error.message);
}

// Get Profile from Treehouse Badge API
function get(username) {
  try {
    // Connect to API URL (https://teamtreehouse.com/username.json)
    const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {

      if(response.statusCode === 200) {

        let body = "";

        // Read the Data
        response.on('data', data => {
          body += data.toString();
        });

        response.on('end', () => {
          try {
            // Parse the Data
            const profile = JSON.parse(body);
            // Print the Data
            printMessage(username, profile.badges.length, profile.points.JavaScript);
          } catch (error) {
            printError(error);
          }
        });

      } else {
        const message = `There was an error getting the profile for ${username} (${http.STATUS_CODES[response.statusCode]})`;
        const statusCodeError = new Error(message);
        printError(statusCodeError);
      }
      // Display Errors
      request.on('error', error => printError(error));

    });

  } catch (error) {
    printError(error);
  }
}

// Exports the get function as get for app.js
module.exports.get = get;
