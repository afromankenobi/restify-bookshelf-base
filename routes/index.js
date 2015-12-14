// This file will require all routes inside this folder

var userRouter = require('./users');

router = function (server){
  server.get('/', function(req, res, next){
    res.send('Index :)');
  });
  
  usersRouter(server);  
};

module.exports = router;