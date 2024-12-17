const express = require('express');
const router = express.Router();
const hotel = require('../models/hotel');

router.get('/', async (req,res) => {
    try {
        const hotels = await hotel.findAll();
        res.json(hotels);
    } catch (err) {
        console.error(err);
        res.status(500).send('Ошибка сервера');
    }
})

router.post('/', async (req, res) => {
    try {
        const {name, description, price_category, city, address, rating} = req.body;
        const newHotel = await hotel.create({name, description, price_category, city, address, rating});
        res.status(201).json({message: 'Отель успешно добавлен', _hotel: newHotel});
    } catch (err){
        console.error(err);
        res.status(501).json({error: 'Ошибка создания отеля'})
    }
})

module.exports = router;