function loggedOut(req, res, next) {
  if (req.session && req.session.userId) {
    return res.redirect('/profile');
  }
  next();
}

function requiresLogin(req, res, next) {
  if(req.session && req.session.userId) {
    return next();
  } else {
    let err = new Error("You must be logged in to see this page.");
    err.status = 401;
    return next();
  }
}

module.exports.loggedOut = loggedOut;
module.exports.requiresLogin = requiresLogin;
