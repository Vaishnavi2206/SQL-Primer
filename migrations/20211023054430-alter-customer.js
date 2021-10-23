'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
        return queryInterface.addColumn(
          "customers",
          "password",
          {
            type:Sequelize.STRING,
            required:true,
            max:1024,
            min:6
          }
        );

  },

  down: async (queryInterface, Sequelize) => {
   return queryInterface.removeColumn("customers", "password");
  }
};
