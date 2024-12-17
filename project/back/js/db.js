const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(
    'h',
    'postgres',
    '1703',
    {
        host: 'localhost',
        port: 5432,
        dialect: 'postgres',
    }
);

sequelize.authenticate()
    .then(()=> console.log("Норм подключено"))
    .catch(() => console.log("Хахахах не подключено",err));

module.exports = sequelize;