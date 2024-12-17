const {DataTypes} = require('sequelize');
const sequelize = require('../db');

const hotel = sequelize.define('hotel',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price_category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rating: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
}, {
    tableName: 'hotel',
    timestamps: false,
});

module.exports = hotel;