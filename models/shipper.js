module.exports = (sequelize, Sequelize) => {
  const Shipper = sequelize.define("shipper", {
    shipper_name: Sequelize.STRING(30),
    shipper_phone: Sequelize.BIGINT(12),
    shipper_address: Sequelize.STRING(20),
  });
  return Shipper
};
