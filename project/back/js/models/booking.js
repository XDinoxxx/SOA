const {DataTypes} = require('sequelize');
const sequelize = require('../db');

const booking = sequelize.define('booking', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    hotel_id:{
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    customer_name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    check_in_date:{
        type: DataTypes.DATE,
        allowNull: false,
    },
    check_out_date:{
        type: DataTypes.DATE,
        allowNull: false,
    },
}, {
    tableName: 'booking',
    timestamps: false,
})

module.exports = booking;