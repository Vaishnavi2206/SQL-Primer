module.exports = (sequelize, Sequelize) => {
  const Carton = sequelize.define("Carton", {
    // CARTON_ID INT(6),
    // LEN BIGINT(10),
    // WIDTH BIGINT(10),
    // HEIGHT BIGINT(10)

    length: {
      type: Sequelize.BIGINT(10),
    },
    width: {
      type: Sequelize.BIGINT(10),
    },
    height: {
      type: Sequelize.BIGINT(10),
    },
  });
  return Carton;
};
