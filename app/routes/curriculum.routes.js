const { upload } = require("../middlewares/upload");
const { curriculum_save, curriculum_byID, curriculum_render_new, curriculum_edit, curriculum_update, curriculum_render_index, curriculum_delete, curriculum_search, curriculum_findAll, pagseguro } = require("../controllers/curriculum.controller");
const { eventosCurriculum_search, eventosCurriculum_getDay, eventosCurriculum_update, eventosCurriculum_allAberto } = require("../controllers/eventosCurriculum.controller");

module.exports = (app, rota) => {
  app.get(rota, curriculum_render_index);
  app.get(`${rota}/new`, curriculum_render_new);
  app.get(`${rota}/view/:id`, curriculum_byID);
  app.get(`${rota}/edit/:id`, curriculum_edit);
  app.get(`${rota}/delete/:id`, curriculum_delete);
  app.get(`${rota}/search/:nome`, curriculum_search);
  app.get(`${rota}/all`, curriculum_findAll);

  app.post(`${rota}/save`, upload.single("photo"), curriculum_save);
  app.post(`${rota}/update`, upload.single("photo"), curriculum_update);

  app.get(`${rota}/eventosSearch/:search`, eventosCurriculum_search);
  app.get(`${rota}/eventosSearch`, eventosCurriculum_getDay);
  app.get(`${rota}/eventosAllAberto`, eventosCurriculum_allAberto);
  app.get(`${rota}/eventosUpdate/:id`, eventosCurriculum_update);
};
