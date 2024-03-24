'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  booking.init({
    flightid: {
      type:DataTypes.INTEGER,
      allowNull: false,
    },

    userid:{ 
      type:DataTypes.INTEGER,
      allowNull: false,
    },
    noofseats:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    seats:{
      type: DataTypes.ENUM(['ECONOMY','BUSINESS']),
     
      defaultValue:'ECONOMY',
    },

    totalcost: {
      type:DataTypes.INTEGER,
     
    },
  }, {
    sequelize,
    modelName: 'booking',
  });
  return booking;
};