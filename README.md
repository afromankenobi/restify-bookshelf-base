## Little restify + bookshelf bootstrap
This is a little app to organize a new NodeJS project. Is a little user CRUD.

Contains:

* Restify
* Bookshelf (Knex.js)
* MySQL

### How to run it

- First, create Mysql database and user

```mysql
  CREATE DATABASE demo_dev;
  CREATE USER demo@127.0.0.1 IDENTIFIED BY '123456';
  GRANT ALL PRIVILEGES ON demo_dev.* TO 'demo'@'127.0.0.1';
```

- Install prerequisites

```bash
  npm install
  npm install knex -g #Install globaly to use the CLI
  knex migrate:latest
```

- I use node-dev to start server ( autoreload <3 )

```bash
  node-dev app.js
```