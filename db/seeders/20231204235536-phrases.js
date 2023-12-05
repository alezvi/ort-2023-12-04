'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Phrases', [
      {
      phrase: 'Frase 1. Frase 2. Frase 3. Frase 4.',
      createdAt: '2023-12-04',
      updatedAt: '2023-12-04'
    } 
  ], {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Phrases', null, {});
  }
};
