// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'super_team'
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./db/migrations"
    }
  }

};
