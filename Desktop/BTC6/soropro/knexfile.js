// Update with your config settings.
// const environment = "development";
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

module.exports = {
  client: "postgresql",
  connection: process.env.DB_URL || {
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
  migrations: {
    directory: "./migrations",
  },
  seeds: {
    directory: "./seeds",
  },
}