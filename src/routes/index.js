
const airportController = require('../modules/controllers/airportController')

const setUpRoutes = (app) => {
    app.use(`/airport`, airportController)
}

module.exports.setUpRoutes = setUpRoutes;