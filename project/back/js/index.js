const express = require('express');
const sequelize = require('./db');
const hotelRoutes = require('./routes/hotelRoutes'); 
const bookingRoutes = require('./routes/bookingRoutes');
const cors = require('cors');

const app = express();

const PORT = 3001;

app.use(express.json());
app.use(cors());

sequelize.sync({ alter: true }) 
  .then(() => console.log('Схемы синхронизированы'))
  .catch(err => console.error('Ошибка синхронизации:', err));

app.get('/', (req,res) => {
    res.send("Hello world");
});

app.use('/hotels', hotelRoutes);
app.use('/bookings', bookingRoutes);

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
})