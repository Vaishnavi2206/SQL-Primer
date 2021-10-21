module.exports = (sequelize, Sequelize) => {
  const Address = sequelize.define("address", {
    address_line_1: {
      type: Sequelize.STRING(50),
    },
    address_line_2: {
      type: Sequelize.STRING(50),
    },
    city: {
      type: Sequelize.STRING(30),
    },
    state: {
      type: Sequelize.STRING(30),
    },
    pincode: {
      type: Sequelize.INTEGER(6),
    },
    country: {
      type: Sequelize.STRING(30),
    },
    landmark: {
      type: Sequelize.STRING(30),
    },
    street: {
      type: Sequelize.STRING(30),
    },
  });

  return Address;
};
