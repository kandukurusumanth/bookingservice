const dotenv= require('dotenv');
dotenv.config();
module.exports={
    PORT:process.env.PORT,
    FLIGHT_PORT:process.env.FLIGHT_PORT,
    FLIGHT_FILE:process.env.FLIGHT_FILE
}