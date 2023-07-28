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
   return await queryInterface.bulkInsert('Products', [
    {
      id: 1, 
      title: 'Air Jordan 1 Retro High OG SP',
      slug: 'jordan-1-retro-high-og-sp',
      price: 1500.00,
      is_published: true,
      description, createdAt, updatedAt
    },
    {
      id: 2, 
      title: 'Adidas Yeezy Boost 350 V2',
      slug: 'adidas-yeezy-boost-350-V2',
      price: 194.00,
      is_published: true,
      description, createdAt, updatedAt
    },
    { 
      id: 3, 
      title: 'Nike Womens Go FlyEase Shoe', 
      slug: 'nike-womens-go-flyease', 
      price: 89.78, 
      is_published: true,
      description, createdAt, updatedAt
    }
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete('Products', null, {})
  }
};
