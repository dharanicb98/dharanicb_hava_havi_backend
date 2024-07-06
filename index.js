const express = require('express');
const routes = require('./src/routes')
const cors = require('cors');
// const dbConnection = require('./src/db')
const { connectMySQl, connection } = require('./src/db');
require('dotenv').config();
const db = require("./src/entites/Airport");

const PORT = process.env.PORT || 3001

const app = express();
app.use(express.json());
app.use(cors());



(async () => {
  try {
      await connectMySQl(); 
     
  } catch (e) {
      console.error('Error starting server:', e?.message);
  }
})();

routes.setUpRoutes(app);
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});
