const moment = require("moment");
const { Curriculum_create, Curriculum_byID, Curriculum_update, Curriculum_delete, Curriculum_search, Curriculum_findAll } = require("../services/curriculum.service");
const { __DOMAIN } = require("../config/config");
const { deleteFile } = require("../functions/deletePhoto");
const { printERRO } = require("../functions/err");
const { EventosCurriculum_create } = require("../services/eventosCurriculum.service");

exports.curriculum_render_index = async (req, res) => {
  res.render("index");
};

exports.curriculum_render_new = async (req, res) => {
  res.render("new");
};

exports.curriculum_save = async (req, res) => {
  let phone_1 = req.body.phone_1 == "(" ? "" : req.body.phone_1;
  let phone_2 = req.body.phone_2 == "(" ? "" : req.body.phone_2;
  let phone_3 = req.body.phone_3 == "(" ? "" : req.body.phone_3;
  var data = {
    id: req.body.id,
    name: req.body.nome,
    nationality: req.body.nationality,
    relationship: req.body.relationship,
    birth: req.body.birth,
    address: req.body.address,
    phone_1,
    phone_2,
    phone_3,
    email: req.body.email,
    cnh: req.body.cnh,
    objective: req.body.objective,
    schoolTraining: req.body.schoolTraining,
    schoolHigher: req.body.schoolHigher,
    Course1: req.body.Course1,
    Course2: req.body.Course2,
    Course3: req.body.Course3,
    Course4: req.body.Course4,
    Course5: req.body.Course5,
    experience1_name: req.body.experience1_name,
    experience1_function: req.body.experience1_function,
    experience1_time: req.body.experience1_time,
    experience2_name: req.body.experience2_name,
    experience2_function: req.body.experience2_function,
    experience2_time: req.body.experience2_time,
    experience3_name: req.body.experience3_name,
    experience3_function: req.body.experience3_function,
    experience3_time: req.body.experience3_time,
    experience4_name: req.body.experience4_name,
    experience4_function: req.body.experience4_function,
    experience4_time: req.body.experience4_time,
    experience5_name: req.body.experience5_name,
    experience5_function: req.body.experience5_function,
    experience5_time: req.body.experience5_time,
    comments: req.body.comments,
  };
  if (req.file) data.photo = req.file.filename;
  const curriculum = await Curriculum_create(data);
  const newEvent = {
    codigo: curriculum.id,
    nome: curriculum.name,
    evento: "novo",
    date: moment(new Date()).format("DD-MM-YYYY"),
    hora: moment(new Date()).format("HH:mm:ss"),
  };
  await EventosCurriculum_create(newEvent);
  res.redirect(`${__DOMAIN}/curriculo/view/${curriculum.id}`);
};

exports.curriculum_byID = async (req, res) => {
  const id = req.params.id;
  if (isNaN(id)) {
    res.status(400).send({ error: `ID: ${id} invalido` });
  }
  const curriculum = await Curriculum_byID(id);
  if (curriculum) res.render("view", { curriculum, moment });
  else res.status(400).send({ error: `ID: ${id} não existe` });
};

exports.curriculum_edit = async (req, res) => {
  const id = req.params.id;
  if (isNaN(id)) {
    res.status(400).send({ error: `ID: ${id} invalido` });
  }
  const curriculum = await Curriculum_byID(id);
  res.render("edit", { curriculum, moment });
};

exports.curriculum_update = async (req, res) => {
  async function compareEdit() {
    const { id, name, photo, nationality, relationship, birth, address, phone_1, phone_2, phone_3, email, cnh, objective, schoolTraining, schoolHigher, Course1, Course2, Course3, Course4, Course5, experience1_name, experience1_function, experience1_time, experience2_name, experience2_function, experience2_time, experience3_name, experience3_function, experience3_time, experience4_name, experience4_function, experience4_time, experience5_name, experience5_function, experience5_time, comments } = req.body;

    const curriculumEdit = await Curriculum_byID(id);
    let editExperience = false;

    if (experience1_name !== curriculumEdit.experience1_name || experience2_name !== curriculumEdit.experience2_name || experience3_name !== curriculumEdit.experience3_name || experience4_name !== curriculumEdit.experience4_name || experience5_name !== curriculumEdit.experience5_name || experience1_function !== curriculumEdit.experience1_function || experience2_function !== curriculumEdit.experience2_function || experience3_function !== curriculumEdit.experience3_function || experience4_function !== curriculumEdit.experience4_function || experience5_function !== curriculumEdit.experience5_function || experience1_time !== curriculumEdit.experience1_time || experience2_time !== curriculumEdit.experience2_time || experience3_time !== curriculumEdit.experience3_time || experience4_time !== curriculumEdit.experience4_time || experience5_time !== curriculumEdit.experience5_time) {
      editExperience = true;
    }

    if (editExperience) {
      const newEvent = {
        codigo: req.body.id,
        nome: req.body.nome,
        evento: "editado",
        date: moment(new Date()).format("DD-MM-YYYY"),
        hora: moment(new Date()).format("HH:mm:ss"),
      };
      return await EventosCurriculum_create(newEvent);
    }
  }

  await compareEdit();

  let phone_1 = req.body.phone_1 == "(" ? "" : req.body.phone_1;
  let phone_2 = req.body.phone_2 == "(" ? "" : req.body.phone_2;
  let phone_3 = req.body.phone_3 == "(" ? "" : req.body.phone_3;

  var data = {
    id: req.body.id,
    name: req.body.nome,
    nationality: req.body.nationality,
    relationship: req.body.relationship,
    birth: req.body.birth,
    address: req.body.address,
    phone_1,
    phone_2,
    phone_3,
    email: req.body.email,
    cnh: req.body.cnh,
    objective: req.body.objective,
    schoolTraining: req.body.schoolTraining,
    schoolHigher: req.body.schoolHigher,
    Course1: req.body.Course1,
    Course2: req.body.Course2,
    Course3: req.body.Course3,
    Course4: req.body.Course4,
    Course5: req.body.Course5,
    experience1_name: req.body.experience1_name,
    experience1_function: req.body.experience1_function,
    experience1_time: req.body.experience1_time,
    experience2_name: req.body.experience2_name,
    experience2_function: req.body.experience2_function,
    experience2_time: req.body.experience2_time,
    experience3_name: req.body.experience3_name,
    experience3_function: req.body.experience3_function,
    experience3_time: req.body.experience3_time,
    experience4_name: req.body.experience4_name,
    experience4_function: req.body.experience4_function,
    experience4_time: req.body.experience4_time,
    experience5_name: req.body.experience5_name,
    experience5_function: req.body.experience5_function,
    experience5_time: req.body.experience5_time,
    comments: req.body.comments,
  };
  if (req.body.photoatual) {
    if (req.body.photoacao == "delet") {
      deleteFile(`./app/public/uploadCurriculum/${req.body.photoatual}`);
      data.photo = "";
    }
    if (req.body.photoacao == "alterado") {
      deleteFile(`./app/public/uploadCurriculum/${req.body.photoatual}`);
    }
  }
  if (req.file) data.photo = req.file.filename;
  await Curriculum_update(data);
  res.redirect(`${__DOMAIN}/curriculo/view/${req.body.id}`);
};

exports.curriculum_delete = async (req, res) => {
  const id = req.params.id;
  if (!isNaN(id)) {
    try {
      const instance = await Curriculum_byID(id);
      if (instance) {
        if (instance.photo) {
          await deleteFile(`./app/public/uploadCurriculum/${instance.photo}`);
        }
        const result = await Curriculum_delete(instance);
        res.json(result);
      } else {
        res.json({ erro: `ID: ${id} não encontrado!` });
      }
    } catch (err) {
      printERRO("DELETE", err);
    }
  }
};

exports.curriculum_search = async (req, res) => {
  let nome = req.params.nome;
  const result = await Curriculum_search(nome);
  res.json(result);
};

exports.curriculum_findAll = async (req, res) => {
  const AllCurriculos = await Curriculum_findAll();
  res.json(AllCurriculos.length);
};
