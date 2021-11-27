const { upload } = require("../middlewares/upload");
const { curriculum_save, curriculum_byID, curriculum_render_new, curriculum_edit, curriculum_update, curriculum_render_index, curriculum_delete, curriculum_search, curriculum_findAll } = require("../controllers/curriculum.controller");

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
};
