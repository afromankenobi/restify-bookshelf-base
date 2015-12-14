var userController = require('../controllers/userController');

usersRouter = function (server){
  // List all users
  server.get('/users', function(req, res, next){
    userController.index().then(function(user) {
      res.send(user);
    }).catch(function (err){
      next(err);
    });
  });

  server.post('/users', function(req, res, next){
    userParams = {
      name: req.body.name,
      lastName: req.body.lastName,
      email: req.body.email
    };
    userController.create(userParams).then(function(user){
      res.send(user);
    }).catch(function(err){
      next(err);
    });
  });

  server.get('/users/:id', function(req, res, next) {
    userController.show(req.params.id).then(function(user){
      res.send(user);
    }).catch(function(err) {
      next(err);
    });
  });

  server.put('/users/:id', function(req, res, next){
    userParams = {
      id: req.params.id,
      name: req.body.name,
      lastName: req.body.lastName,
      email: req.body.email
    };
    userController.update(userParams).then(function(user){
      res.send(user);
    }).catch(function(err){
      next(err);
    });
  });

  server.del('/users/:id', function(req, res, next) {
    userController.destroy(req.params.id).then(function(msg){
      res.send(msg);
    }).catch(function(err){
      next(err);
    });
  });
};

module.exports = usersRouter;