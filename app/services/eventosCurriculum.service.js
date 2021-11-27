const { eventos_curriculum } = require("../models");

exports.EventosCurriculum_create = async (data) => {
  try {
    const { codigo, nome, evento } = data;
    return await eventos_curriculum.create({ codigo, nome, evento });
    //
  } catch (err) {
    console.warn("ERRO NovoCurriculum_create: " + err);
    return { erro: true, dev: "ERRO NovoCurriculum_create: ", message: err };
  }
};
