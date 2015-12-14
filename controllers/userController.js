// Import models
bookshelf = require('../bookshelf');
User = require('../models/user');

userController = {
  index: function(){
    return new Promise(function(resolve, reject){
      User.fetchAll().then(function(users){
        resolve(users);
      }).catch(function(err){
        reject(err);
      });      
    });
  },

  create: function(userParams){
    return new Promise(function(resolve, reject){
      new User(userParams).save().then(function(user){
        console.log('User created:' + user.id);
        resolve(user);
      }).catch(function(err){
        reject(err);
      });
    });
  },

  show: function(id){
    return new Promise(function(resolve, reject){
      new User({id: id}).fetch().then(function(user){
        console.log(user);
        resolve(user);
      }).catch(function(err) {
        reject(err);
      });
    });
  },

  update: function(userParams){
    return new Promise(function(resolve, reject){
      new User({id: userParams.id}).fetch().then(function(user){
        user.save({
          name: userParams.name,
          lastName: userParams.lastName,
          email: userParams.email
        }).then(function(user){
          resolve(user);
        }).catch(function(err){
          reject(err);  
        });
      }).catch(function(err) {
        reject(err);
      });
    });
  },


  destroy: function(id){
    return new Promise(function(resolve, reject) {
      new User({id: id}).destroy().then(function(){
        resolve('user deleted');
      }).catch(function(err){
        reject(err);
      });
    });
  }

};
module.exports = userController;