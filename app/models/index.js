const { Sequelize } = require("sequelize");
const { __db } = require("../config/config");

const sequelize = new Sequelize(__db.banco, __db.user, __db.password, {
  dialect: "mysql",
  logging: false,
  timezone: "-03:00",
  define: {
    freezeTableName: true,
  },
});
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.curriculum = require("./curriculum.model")(sequelize, Sequelize);
db.eventos_curriculum = require("./eventosCurriculum.model")(sequelize, Sequelize);

module.exports = db;
