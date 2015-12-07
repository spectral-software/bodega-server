require('app-module-path').addPath(__dirname + '/lib');

var server = require('nodebootstrap-server');

server.setup(function(runningApp) {
  var Config = require('config');

  runningApp.use(require('helmet')());
  runningApp.use(require('express-session')({ secret: Config.app.cookie_secret, resave: false, saveUninitialized: false }));
  runningApp.disable("x-powered-by");
  runningApp.set('view engine', 'jade');
  runningApp.engine('jade', require('jade').__express);

  runningApp.use('/', require('root')); // attach to root route

  // Catch-all error handler.
  // runningApp.use(require('errorhandler')({ dumpExceptions: true, showStack: true }));
  // Write your own if you need such thing. @see: http://expressjs.com/guide/error-handling.html
  // runningApp.use(function(err, req, res, next) {
  //   logic
  // });
});
