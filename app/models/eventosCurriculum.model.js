module.exports = (sequelize, DataTypes) => {
  const eventosCurriculum = sequelize.define("eventos_curriculum", {
    codigo: DataTypes.STRING,
    nome: DataTypes.STRING,
    evento: DataTypes.STRING,
  });
  return eventosCurriculum;
};
