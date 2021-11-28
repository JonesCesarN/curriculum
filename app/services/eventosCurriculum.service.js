const { eventos_curriculum } = require("../models");

exports.EventosCurriculum_create = async (data) => {
  try {
    const { codigo, nome, evento, date, hora } = data;
    return await eventos_curriculum.create({ codigo, nome, evento, date, hora });
    //
  } catch (err) {
    console.warn("ERRO NovoCurriculum_create: " + err);
    return { erro: true, dev: "ERRO NovoCurriculum_create: ", message: err };
  }
};

exports.EventosCurriculum_search = async (date) => {
  return await eventos_curriculum.findAll({
    where: { date },
  });
};

exports.EventosCurriculum_getDay = async (date) => {
  return await eventos_curriculum.findAll({
    raw: true,
    where: { date },
  });
};
