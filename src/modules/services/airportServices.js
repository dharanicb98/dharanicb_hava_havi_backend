
const airportRepo = require('../repo/airportRepo')

const getAirportData = async ( query ) => { 
    if ( !query?.iata_code ) {
        throw new Error('Please send iata code in query');
    };


    const iata_code = query?.iata_code.toUpperCase();

    const airport = await airportRepo.getAirportDbData({iata_code});

    if (airport) {
        const response = {
          airport: {
            id: airport?.id,
            icao_code: airport?.icao_code,
            iata_code: airport?.iata_code,
            name: airport?.name,
            type: airport?.type,
            latitude_deg: airport?.latitude_deg,
            longitude_deg: airport?.longitude_deg,
            elevation_ft: airport?.elevation_ft,
            address: {
              city: {
                id: airport?.city?.id,
                name: airport?.city?.name,
                country_id: airport?.city?.country_id,
                is_active: airport?.city?.is_active,
                lat: airport?.city?.lat,
                long: airport?.city?.long,
              },
              country: airport?.city?.country
                ? {
                    id: airport?.city?.country.id,
                    name: airport?.city?.country.name,
                    country_code_two: airport?.city?.country?.country_code_two,
                    country_code_three: airport?.city?.country?.country_code_three,
                    mobile_code: airport?.city?.country?.mobile_code,
                    continent_id: airport?.city?.country?.continent_id,
                  }
                : null,
            },
        } 

      }
      return response
    }


   return null


}

module.exports.getAirportData = getAirportData
