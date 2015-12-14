// Update with your config settings.

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      database: 'firesport_dev',
      user:     'firesport',
      password: '123456'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  qa: {
    client: 'mysql',
    connection: process.env.DATABASE_URL || {
      database: 'firesport_qa',
      user:     'username',
      password: '123456'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
