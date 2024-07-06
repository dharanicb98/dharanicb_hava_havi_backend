const express = require('express');
const router = express.Router();
const airportServices = require('../services/airportServices')


router.get('/', async (req, res) => {
    try {
        let query = req.query
        const data = await airportServices.getAirportData(query)
        res.send(data)
    }
    catch (e) {
        console.log('e',e)
        res.status(500).send({error:true, message:e?.message})
    }
})

module.exports  = router