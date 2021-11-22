const __db = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  banco: process.env.DB_BANCO,
};

const __PORT = process.env.PORT;
const __DOMAIN = process.env.DOMAIN;

module.exports = { __db, __PORT, __DOMAIN };
