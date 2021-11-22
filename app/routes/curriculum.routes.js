const Curriculum = require('../controllers/curriculum.controller');
const { upload } = require('../middlewares/upload');
const { deleteFile } = require('../functions/deletePhoto');
const moment = require('moment');
const { __DOMAIN } = require('../config/config');
const puppeteer = require('puppeteer');
const { printERRO } = require('../functions/err');

module.exports = (app, rota) => {
  app.get(rota, async (req, res) => {
    res.render('index');
  });

  app.get(`${rota}/new`, (req, res) => {
    res.render('new');
  });

  app.post(`${rota}/save`, upload.single('photo'), async (req, res) => {
    

    let phone_1 = req.body.phone_1 == '(' ? '' : req.body.phone_1
    let phone_2 = req.body.phone_2 == '(' ? '' : req.body.phone_2
    let phone_3 = req.body.phone_3 == '(' ? '' : req.body.phone_3
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
    const create = await Curriculum.create(data);
    res.redirect(`/curriculo/view/${create.id}`);
  });

  app.get(`${rota}/search/:nome`, async (req, res) => {
    let nome = req.params.nome;
    const result = await Curriculum.search(nome);
    res.json(result);
  });

  app.get(`${rota}/view/:id`, async (req, res, nxt) => {
    const id = req.params.id;
    if (isNaN(id)) {
      res.status(400).send({ error: `ID: ${id} invalido` });
    }
    const curriculum = await Curriculum.byID(id);
    if (curriculum) res.render('view', { curriculum, moment });
    else res.status(400).send({ error: `ID: ${id} não existe` });
  });

  app.get(`${rota}/edit/:id`, async (req, res, nxt) => {
    const id = req.params.id;
    if (isNaN(id)) {
      res.status(400).send({ error: `ID: ${id} invalido` });
    }
    const curriculum = await Curriculum.byID(id);
    res.render('edit', { curriculum, moment });
  });

  app.post(`${rota}/update`, upload.single('photo'), async (req, res) => {

    let phone_1 = req.body.phone_1 == '(' ? '' : req.body.phone_1
    let phone_2 = req.body.phone_2 == '(' ? '' : req.body.phone_2
    let phone_3 = req.body.phone_3 == '(' ? '' : req.body.phone_3

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
      if (req.body.photoacao == 'delet') {
        deleteFile(`./app/public/uploadCurriculum/${req.body.photoatual}`);
        data.photo = '';
      }
      if (req.body.photoacao == 'alterado') {
        deleteFile(`./app/public/uploadCurriculum/${req.body.photoatual}`);
      }
    }
    if (req.file) data.photo = req.file.filename;
    const result = await Curriculum.update(data);
    res.redirect(`${__DOMAIN}/curriculo/view/${req.body.id}`);
  });

  app.get(`${rota}/delete/:id`, async (req, res) => {
    const id = req.params.id;
    if (!isNaN(id)) {
      try {
        const instance = await Curriculum.byID(id);
        if (instance) {
          if (instance.photo) {
            await deleteFile(`./app/public/uploadCurriculum/${instance.photo}`);
          }
          const result = await Curriculum.delete(instance);
          res.json(result);
        } else {
          res.json({ erro: `ID: ${id} não encontrado!` });
        }
      } catch (err) {
        printERRO('DELETE', err);
      }
    }
  });

  app.get(`${rota}/pdf/:id`, async (req, res) => {
    const id = req.params.id;
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(`${__DOMAIN}/curriculo/view/${id}`, {
      waitUntil: 'networkidle0',
    });
    const path = require('path');
    const curriculum = await Curriculum.byID(id);
    const nome = curriculum.name.replace(/[" "]/g, '-');
    const pdf = await page.pdf({
      printBackground: true,
      // path: path.join(__dirname, `../public/temp/${nome}-${Date.now()}.pdf`),
      format: 'A4',
    });
    await browser.close();

    res.contentType('application/pdf');

    return res.send(pdf);
  });

  app.get(`${rota}/all`, async (req, res) => {
    const AllCurriculos = await Curriculum.findAll();
    res.json(AllCurriculos.length);
  });
};
