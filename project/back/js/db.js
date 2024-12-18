const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(
    'h', // name db
    'postgres', // user
    '1703', // password
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