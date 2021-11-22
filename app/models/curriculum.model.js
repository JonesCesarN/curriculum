module.exports = (sequelize, DataTypes) => {
  const Curriculum = sequelize.define("curriculum", {
    name: DataTypes.STRING,
    photo: DataTypes.STRING,
    nationality: DataTypes.STRING,
    relationship: DataTypes.STRING,
    birth: DataTypes.STRING,
    address: DataTypes.STRING,

    //  telefones
    phone_1: DataTypes.STRING,
    phone_2: DataTypes.STRING,
    phone_3: DataTypes.STRING,

    email: DataTypes.STRING,
    cnh: DataTypes.STRING,
    objective: DataTypes.STRING,

    // escolaridade
    schoolTraining: DataTypes.STRING,
    schoolHigher: DataTypes.STRING,

    // cursos
    Course1: DataTypes.STRING,
    Course2: DataTypes.STRING,
    Course3: DataTypes.STRING,
    Course4: DataTypes.STRING,
    Course5: DataTypes.STRING,

    // experiência profissional 1
    experience1_name: DataTypes.STRING,
    experience1_function: DataTypes.STRING,
    experience1_time: DataTypes.STRING,

    // experiência profissional 2
    experience2_name: DataTypes.STRING,
    experience2_function: DataTypes.STRING,
    experience2_time: DataTypes.STRING,

    // experiência profissional 3
    experience3_name: DataTypes.STRING,
    experience3_function: DataTypes.STRING,
    experience3_time: DataTypes.STRING,

    // experiência profissional 4
    experience4_name: DataTypes.STRING,
    experience4_function: DataTypes.STRING,
    experience4_time: DataTypes.STRING,

    // experiência profissional 5
    experience5_name: DataTypes.STRING,
    experience5_function: DataTypes.STRING,
    experience5_time: DataTypes.STRING,

    comments: DataTypes.STRING,
    expired: DataTypes.STRING,
  });
  return Curriculum;
};
