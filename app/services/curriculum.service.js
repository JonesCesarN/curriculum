const { curriculum } = require("../models");
const moment = require("moment");
const { Op } = require("sequelize");

exports.Curriculum_create = async (data) => {
  try {
    const { name, photo, nationality, relationship, birth, address, phone_1, phone_2, phone_3, email, cnh, objective, schoolTraining, schoolHigher, Course1, Course2, Course3, Course4, Course5, experience1_name, experience1_function, experience1_time, experience2_name, experience2_function, experience2_time, experience3_name, experience3_function, experience3_time, experience4_name, experience4_function, experience4_time, experience5_name, experience5_function, experience5_time, comments } = data;

    return await curriculum.create({
      name,
      photo,
      nationality,
      relationship,
      birth,
      address,
      phone_1,
      phone_2,
      phone_3,
      email,
      cnh,
      objective,
      schoolTraining,
      schoolHigher,
      Course1,
      Course2,
      Course3,
      Course4,
      Course5,
      experience1_name,
      experience1_function,
      experience1_time,
      experience2_name,
      experience2_function,
      experience2_time,
      experience3_name,
      experience3_function,
      experience3_time,
      experience4_name,
      experience4_function,
      experience4_time,
      experience5_name,
      experience5_function,
      experience5_time,
      comments,
      expired: moment(new Date(Date.now())).add(1, "y").format("MM/YYYY"),
    });
  } catch (err) {
    console.warn("ERRO Curriculum_create: " + err);
    return { erro: true, dev: "ERRO Curriculum_create: ", message: err };
  }
};

exports.Curriculum_byID = async (id) => {
  try {
    return await curriculum.findByPk(id);
  } catch (err) {
    console.warn("ERRO Curriculum_byID: " + err);
    return { erro: true, dev: "ERRO Curriculum_byID: ", message: err };
  }
};

exports.Curriculum_update = async (data) => {
  const { id, name, photo, nationality, relationship, birth, address, phone_1, phone_2, phone_3, email, cnh, objective, schoolTraining, schoolHigher, Course1, Course2, Course3, Course4, Course5, experience1_name, experience1_function, experience1_time, experience2_name, experience2_function, experience2_time, experience3_name, experience3_function, experience3_time, experience4_name, experience4_function, experience4_time, experience5_name, experience5_function, experience5_time, comments } = data;

  return await curriculum.update(
    {
      name,
      photo,
      nationality,
      relationship,
      birth,
      address,
      phone_1,
      phone_2,
      phone_3,
      email,
      cnh,
      objective,
      schoolTraining,
      schoolHigher,
      Course1,
      Course2,
      Course3,
      Course4,
      Course5,
      experience1_name,
      experience1_function,
      experience1_time,
      experience2_name,
      experience2_function,
      experience2_time,
      experience3_name,
      experience3_function,
      experience3_time,
      experience4_name,
      experience4_function,
      experience4_time,
      experience5_name,
      experience5_function,
      experience5_time,
      comments,
      expired: moment(new Date(Date.now())).add(1, "y").format("MM/YYYY"),
    },
    {
      where: {
        id,
      },
      returning: true,
      plain: true,
    }
  );
};

exports.Curriculum_delete = async (instance) => {
  return await instance.destroy();
};

exports.Curriculum_findAll = async () => {
  return await curriculum.findAll();
};

exports.Curriculum_search = async (nome) => {
  return await curriculum.findAll({
    where: {
      name: {
        [Op.like]: "%" + nome + "%",
      },
    },
  });
};
