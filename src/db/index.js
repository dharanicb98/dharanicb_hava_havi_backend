require("reflect-metadata");
const { createConnection } = require("typeorm");
const { Airport } = require("../entites/Airport");
const { City } = require("../entites/City");
const { Country } = require("../entites/Country");
require('dotenv').config();

const TYPE = process.env.TYPE || "mysql"
const HOST = process.env.HOST || "localhost"
const DBPORT = process.env.DBPORT || 3306
const USERNAME = process.env.USERNAME || "root"
const PASSWORD = process.env.PASSWORD || "root"
const DBNAME = process.env.DBNAME || "airport_db"

let connection 

const connectMySQl = async () => {
    try {
          connection = await createConnection({
                type: TYPE,
                host: HOST,
                port: DBPORT,
                username: USERNAME,
                password: PASSWORD,
                database: DBNAME,
                synchronize: false, // Disable automatic synchronization
                entities: [Airport, City, Country],
                extra: {
                    connectionLimit: 5,
                    supportBigNumbers: true,
                    bigNumberStrings: true,
                },
                logging: ["error", "query"],
            });
           return connection
            console.log('MySQL db connected successfully')
    } 
    catch (e) {
        console.log('Error in MySQL connection:', e?.message);
        throw e; // Re-throw the error to be handled elsewhere if needed
    }
};



module.exports = {
  connectMySQl,
  connection 
};
