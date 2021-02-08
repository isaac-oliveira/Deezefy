const { Pool } = require("pg");

/* Conexao do banco de dados */
const pool = new Pool({
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  ssl: false,
});

module.exports = {
  pool,
};
