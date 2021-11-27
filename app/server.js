const init = async () => {
  require("dotenv").config({ path: `./.env` });
  const { initialize } = require("./functions/createDB");
  await initialize();
  const db = require("./models");

  const express = require("express");
  const app = express();
  const http = require("http").Server(app);
  const io = require("socket.io")(http);

  app.set("view engine", "ejs");
  app.set("views", "./app/views");
  const cors = require("cors");
  app.use((req, res, next) => {
    //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
    //Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    app.use(cors());
    next();
  });
  app.use(express.static("./app/public"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  db.sequelize.sync().then(async () => {
    console.log("Banco ok");
    module.exports = { io };
    require("./routes/curriculum.routes")(app, "/curriculo");

    /* error 404 - pagina nao encontrada */
    app.use((req, res) => {
      res.render("404", { url: req.url });
    });
  });

  const { __PORT } = require("./config/config");
  const moment = require("moment");
  http.listen(__PORT, (err) => {
    if (err) require("./functions/err")("iniciar servidor", err);
    else {
      console.log(
        "listen " +
          moment(new Date()).format("DD/MM/YYYY HH:mm:ss") +
          "\nhttp://localhost:" +
          __PORT +
          "/curriculo"
      );
    }
  });
};

init();
