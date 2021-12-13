const { EventosCurriculum_search, EventosCurriculum_getDay, EventosCurriculum_update, EventosCurriculum_allAberto } = require("../services/eventosCurriculum.service");
const moment = require("moment");
exports.eventosCurriculum_search = async (req, res) => {
  let search = req.params.search;
  const result = await EventosCurriculum_search(search);
  let last6eventCurriculos = result.slice(result.length - 6);

  res.json(last6eventCurriculos);
};

exports.eventosCurriculum_getDay = async (req, res) => {
  let date = moment(new Date()).format("DD-MM-YYYY");
  const result = await EventosCurriculum_getDay(date);
  if (result.length > 4) {
    let last6eventCurriculos = result.slice(result.length - 4);

    res.json({ result: last6eventCurriculos });
  } else {
    res.json({ result });
  }
};

exports.eventosCurriculum_update = async (req, res) => {
  let date = moment(new Date()).format("DD-MM-YYYY HH:mm:ss");
  const id = req.params.id;
  const result = await EventosCurriculum_update(id, date);
  res.json(result);
};

exports.eventosCurriculum_allAberto = async (req, res) => {
  const result = await EventosCurriculum_allAberto();
  res.json(result);
};
