'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert("order_items", [
     {
       product_quantity: 10,
       productID: 2,
       orderID: 1,
     },
   ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("order_items", null, {});
  }
};
