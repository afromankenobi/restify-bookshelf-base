var restify = require('restify'),
    port = process.env.PORT || 3000,
    router = require('./routes/index'),
    server = restify.createServer({
      name: 'Test'
    });

// Use bodyParser to read body of posts request
server.use(restify.bodyParser());
// Call routes
router(server);

// Server listen initialize
server.listen(port, function (err) {
  if (err)
    console.error(err);
  else
    console.info('%s listening at <%s>', server.name, server.url);
});
 
 // Errors in production
if (process.env.environment == 'production'){
  process.on('uncaughtException', function (err) {
    console.error(JSON.parse(err));
  });
}