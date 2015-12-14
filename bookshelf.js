var config = require('./knexfile.js'),
    knex = require('knex')(config[process.env.environment || 'development']);

module.exports = require('bookshelf')(knex);