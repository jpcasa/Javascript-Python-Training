const Profile = require("./profile.js");
const renderer = require("./renderer.js");
const querystring = require("querystring");

const commonHeaders = ['Content-Type', 'text/html'];

// Handle HTTP route GET / and POST / i.e. hostname
function home(request, response) {
  if(request.url === '/') {
    // Check if URL is GET and no searches have been processed
    if(request.method.toLowerCase() === "get") {
      response.statusCode = 200;
      response.setHeader(...commonHeaders);
      renderer.view("header", {}, response);
      renderer.view("search", {}, response);
      renderer.view("footer", {}, response);
      response.end();
    } else {
      // If data is sent through POST
      request.on("data", function(postBody) {
        // Parse the POST
        const query = querystring.parse(postBody.toString());
        // Redirect to /:username
        response.writeHead(303, { 'Location': '/' + query.username });
        response.end();
      });
    }
  }
}

// Handle HTTP route GET /:username i.e. /juanpablocasabianca
function user(request, response) {

  // Receives the URL and cleans it
  const username = request.url.replace("/", "");

  // If URL is a valid string
  if (username.length > 0) {

    // Connection
    response.statusCode = 200;
    response.setHeader(...commonHeaders);
    renderer.view("header", {}, response);

    // Declare Profile
    let studentProfile = new Profile(username);

    // If response works fine
    studentProfile.on("end", function(profileJSON){
        const values = {
          avatarUrl: profileJSON.gravatar_url,
          username: profileJSON.profile_name,
          badges: profileJSON.badges.length,
          javascriptPoints: profileJSON.points.JavaScript
        }
        renderer.view("profile", values, response);
        renderer.view("footer", {}, response);
        response.end();
    });

    // On Error
    studentProfile.on("error", function(error){
      renderer.view("error", {errorMessage: error.message}, response);
      renderer.view("search", {}, response);
      renderer.view("footer", {}, response);
      response.end();
    });

  }
}

module.exports.home = home;
module.exports.user = user;
