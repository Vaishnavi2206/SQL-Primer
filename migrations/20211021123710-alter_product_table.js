"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn("products", "product_class_code", {
      type: Sequelize.INTEGER(4),
      references: { model: "product_classes", key: "product_class_code" },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("products", "product_code");
    
  },
};
