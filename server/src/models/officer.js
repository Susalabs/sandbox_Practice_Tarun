'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Officer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
      // define association here
    }
  }
  Officer.init({
    name: DataTypes.STRING,
    rank:DataTypes.STRING,
    gender:DataTypes.CHAR,
    dob:DataTypes.DATE,
    doc:DataTypes.DATE,
    dos:DataTypes.DATE,
    dor:DataTypes.DATE,
    mob_no:DataTypes.DATE,
    professional_qualification:DataTypes.STRING,
    courses:DataTypes.STRING,
    pers_no:DataTypes.INTEGER,
    med_cat:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Officer',
  });
  return Officer;
};