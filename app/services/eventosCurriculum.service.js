const { eventos_curriculum } = require("../models");

exports.EventosCurriculum_create = async (data) => {
  try {
    const { codigo, nome, evento, date, hora } = data;
    return await eventos_curriculum.create({
      codigo,
      nome,
      evento,
      date,
      hora,
      status: "aberto",
    });
    //
  } catch (err) {
    return { erro: true, dev: "ERRO EventosCurriculum_create: ", message: err };
  }
};

exports.EventosCurriculum_search = async (date) => {
  try {
    return await eventos_curriculum.findAll({
      where: { date },
    });
  } catch (err) {
    return { erro: true, dev: "ERRO EventosCurriculum_search: ", message: err };
  }
};

exports.EventosCurriculum_allAberto = async () => {
  try {
    return await eventos_curriculum.findAll({
      where: { status: "aberto" },
    });
  } catch (err) {
    return { erro: true, dev: "ERRO EventosCurriculum_allAberto: ", message: err };
  }
};

exports.EventosCurriculum_getDay = async (date) => {
  try {
    return await eventos_curriculum.findAll({
      raw: true,
      where: { date, status: "aberto" },
    });
  } catch (err) {
    return { erro: true, dev: "ERRO EventosCurriculum_getDay: ", message: err };
  }
};

exports.EventosCurriculum_byID = async (id) => {
  try {
    return await eventos_curriculum.findByPk(id);
  } catch (err) {
    return { erro: true, dev: "ERRO EventosCurriculum_byID: ", message: err };
  }
};

exports.EventosCurriculum_update = async (id, date) => {
  try {
    const instance = await this.EventosCurriculum_byID(id);
    instance.status = "fechado";
    instance.fechamento = date;
    await instance.save();
    await instance.reload();
    return instance;
  } catch (err) {
    return { erro: true, dev: "ERRO EventosCurriculum_update: ", message: err };
  }
};
