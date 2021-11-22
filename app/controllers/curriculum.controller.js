const { curriculum } = require('../models');
const moment = require('moment');
const { Op } = require('sequelize');

exports.create = async (data) => {
  const {
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
  } = data;

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
    expired: moment(new Date(Date.now())).add(1, 'y').format('MM/YYYY'),
  });
};

exports.byID = async (id) => {
  return await curriculum.findByPk(id);
};

exports.update = async (data) => {
  const {
    id,
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
  } = data;

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
      expired: moment(new Date(Date.now())).add(1, 'y').format('MM/YYYY'),
    },
    {
      where: {
        id,
      },
      returning: true,
      plain: true,
    },
  );
};

exports.delete = async (instance) => {
  return await instance.destroy();
};

exports.search = async (nome) => {
  return await curriculum.findAll({
    where: {
      name: {
        [Op.like]: '%' + nome + '%',
      },
    },
  });
};

exports.findAll = async () => {
  return await curriculum.findAll();
};
