const { sequelize } = require('../models');
const {Sequelize} =require('sequelize')
const {booking} = require('../repo/index');
const {server} = require('../config/index') 
const bookingservice= new booking();
async function createbookingservice(data1){
    try {
        // console.log(data.flightid);
        
        let booking1 = await sequelize.transaction(async (t)=>{
            const response =await fetch(`${server.FLIGHT_PORT}/api/v1/flight/${data1.flightid}`);
            let flight= await response.json();
            if(data1.noofseats>flight.sucessresponse.data.totalseats){
                throw new Error ('insucifficent seats')
            }
            else {
                await bookingservice.update_for_flight(flight,data1.noofseats)
                const totalcost=flight.sucessresponse.data.price;
                data1.totalcost=totalcost*(data1.noofseats);
                const booking = await bookingservice.create(data1);
               
                return booking;

            }
            
        })
      
    } catch (error) {
       
        throw error
        
    }
}
module.exports={
    createbookingservice
}