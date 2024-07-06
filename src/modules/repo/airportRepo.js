const {connectMySQl,  connection } = require("../../db/index");

const { Airport } = require("../../entites/Airport");

const getAirportDbData = async (query) => {
  try {

    const airport = await connection.getRepository(Airport).findOne({
        where: query,
        relations: ['city', 'city.country'],
    });

    return airport;
} catch (e) {
    console.error(`MySQL database error: ${e.message}`);
    throw new Error(`MySQL database error: ${e.message}`);
}
}

module.exports.getAirportDbData = getAirportDbData