module.exports = (sequelize, DataTypes) => {
  const eventosCurriculum = sequelize.define(
    "eventos_curriculum",
    {
      codigo: DataTypes.STRING,
      nome: DataTypes.STRING,
      evento: DataTypes.STRING,
      date: DataTypes.STRING,
      hora: DataTypes.STRING,
    },
    { timestamps: false }
  );
  return eventosCurriculum;
};
