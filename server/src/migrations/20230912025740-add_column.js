'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'Officers',
      'pers_no',
      {
        type: Sequelize.INTEGER,

       
      }
    )
    await queryInterface.addColumn(
      'Officers',
      'rank',
      {
        type: Sequelize.CHAR,

       
      }
    )
    await queryInterface.addColumn(
      'Officers',
      'med_cat',
      {
        type: Sequelize.STRING,

       
      }
    )
    await queryInterface.addColumn(
      'Officers',
      'gender',
      {
        type: Sequelize.CHAR,

       
      }
    )
    await queryInterface.addColumn(
      'Officers',
      'dob',
      {
        type: Sequelize.DATE,

       
      }
    )
    await queryInterface.addColumn(
      'Officers',
      'doc',
      {
        type: Sequelize.DATE,

       
      }
    )
    await queryInterface.addColumn(
      'Officers',
      'dos',
      {
        type: Sequelize.DATE,

       
      }
    )
    await queryInterface.addColumn(
      'Officers',
      'dor',
      {
        type: Sequelize.DATE,

       
      }
    )
    await queryInterface.addColumn(
      'Officers',
      'mob_no',
      {
        type: Sequelize.INTEGER,

       
      }
    )
    await queryInterface.addColumn(
      'Officers',
      'former_service_detail',
      {
        type: Sequelize.STRING,

       
      }
    )
    await queryInterface.addColumn(
      'Officers',
      'professional_qualification',
      {
        type: Sequelize.STRING,

       
      }
    )
    await queryInterface.addColumn(
      'Officers',
      'courses',
      {
        type: Sequelize.STRING,

       
      }
    )
    await queryInterface.addColumn(
      'Officers',
      'promotion',
      {
        type: Sequelize.STRING,

       
      }
    )
    await queryInterface.addColumn(
      'Officers',
      'commision_details',
      {
        type: Sequelize.STRING,

       
      }
    )
    await queryInterface.addColumn(
      'Officers',
      'present_unit',
      {
        type: Sequelize.STRING,

       
      }
    )
    await queryInterface.addColumn(
      'Officers',
      'appointment',
      {
        type: Sequelize.STRING,

       
      }
    )
    await queryInterface.addColumn(
      'Officers',
      'location_unit',
      {
        type: Sequelize.STRING,

       
      }
    )
    await queryInterface.addColumn(
      'Officers',
      'past_posting_profile',
      {
        type: Sequelize.STRING,

       
      }
    )
    await queryInterface.addColumn(
      'Officers',
      'disability',
      {
        type: Sequelize.BOOLEAN,

       
      }
    )
    await queryInterface.addColumn(
      'Officers',
      'awards_decoration',
      {
        type: Sequelize.STRING,

       
      }
    )
    await queryInterface.addColumn(
      'Officers',
      'speciality',
      {
        type: Sequelize.STRING,

       
      }
    )
    await queryInterface.addColumn(
      'Officers',
      'super_speciality_trg',
      {
        type: Sequelize.STRING,

       
      }
    )
    await queryInterface.addColumn(
      'Officers',
      'photo',
      {
        type: Sequelize.STRING,

       
      }
    )
    await queryInterface.addColumn(
      'Officers',
      'pmr_status',
      {
        type: Sequelize.STRING,

       
      }
    )
    await queryInterface.addColumn(
      'Officers',
      'disciplinary_details',
      {
        type: Sequelize.STRING,

       
      }
    )
    await queryInterface.addColumn(
      'Officers',
      'teaching_experiance',
      {
        type: Sequelize.STRING,

       
      }
    )
  },

  async down(queryInterface, Sequelize) {

  }
};
