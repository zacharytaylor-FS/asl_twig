'use strict';

const description = `The first release as part of Travis Scott's monumental partnership with Nike, the Air Jordan 1 Travis Scott breaks the conventional rules of the Air Jordan 1 design. For starters, the side Swooshes are reversed, which each tailing facing the toe. Woven tongue tags are shifted and stitched to the side of the tongue instead of the top. Also, in the collar, there is a hidden stash pocket. A one-of-a-kind design fit for a one-of-a-kind artist. 
The Air Jordan 1 Travis Scott features a white leather upper with Mocha suede overlays and black leather reversed Swooshes. Hits of red on the tongue slightly contrast the design's earth tones. On the heel, a debossed Cactus Jack logo adds a custom feel. From there, a yellowed midsole and matching Mocha outsole complete the design. 
The Jordan 1 Travis Scott Mocha released in May 2019 and retailed for $175.`


const [ createdAt, updatedAt ] = [ new Date(), new Date() ]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Variants', [
      {id: 1, title: 'Travis Scott Mocha', slug: 'travis-scott-mocha', description, price: 1500.00, productId: 1, inventory: 2, createdAt, updatedAt  
    },
      { id: 2, title: 'Midnight Black', slug: 'midnight-black', description, price: 89.78, productId: 3, inventory: 24, createdAt, updatedAt  
    },
      { id: 3, title: 'Zebra (2017/2022/2023)', slug: 'zebra', description, price: 280.00, productId: 2, inventory: 0, createdAt, updatedAt  
    },
      { id: 4, title: 'Carbon Beluga', slug: 'carbon-beluga', description, price: 194.00, productId: 2, inventory: 10, createdAt, updatedAt  }
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete('Variants', null, {})
  }
};
