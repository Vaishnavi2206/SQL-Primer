module.exports = (sequelize, Sequelize) => {
  const Admin = sequelize.define("admin", {
    fullname: {
      type: Sequelize.STRING(50),
    },
    username: {
      type: Sequelize.STRING(20),
    },
    password: {
      type: Sequelize.STRING,
    },
  });

  return Admin;
};
