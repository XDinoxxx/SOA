const express = require('express');
const router = express.Router();
const booking = require('../models/booking');

router.get('/', async (req, res) => {
    try{
        const bookings = await booking.findAll();
        res.json(bookings);
    } catch (err){
        console.error(err);
        res.status(500).send('Ошибка сервера');
    }
})

router.post('/', async (req, res) => {
    try {
        const {hotel_id, customer_name, check_in_date, check_out_date} = req.body;
        const newBooking = await booking.create({hotel_id, customer_name, check_in_date, check_out_date});
        res.status(201).json({message: 'Бронирование успешно добавлено', _booking: newBooking})
    } catch (err){
        console.error(err);
        res.status(501).json({error: 'Ошибка создания бронирования'})
    }
})

module.exports = router;