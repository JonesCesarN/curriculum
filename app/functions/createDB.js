const { __db } = require("../config/config");

async function initialize() {
  // criar db se nao existir exitir
  const mysql = require("mysql2/promise");
  const connection = await mysql.createConnection({
    host: __db.host,
    port: __db.port,
    user: __db.user,
    password: __db.password,
  });
  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${__db.banco}\`;`);
}

module.exports = { initialize };
