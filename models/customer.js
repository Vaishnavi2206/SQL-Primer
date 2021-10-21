module.exports = (sequelize, Sequelize) => {
  const Customer = sequelize.define("Customer", {
    firstname: {
      type: Sequelize.STRING(20),
    },
    lastname: {
      type: Sequelize.STRING(20),
    },
    email: {
      type: Sequelize.STRING(30),
    },
    phone: {
      type: Sequelize.BIGINT(10),
    },
    username: {
      type: Sequelize.STRING(20),
    },
    gender: {
      type: Sequelize.CHAR(1),
    },
  });

  return Customer
};
