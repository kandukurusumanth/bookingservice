const { sequelize } = require('../models');
const {Sequelize} =require('sequelize')
const {booking} = require('../repo/index');
const {server} = require('../config/index'); 
const { queuetigger } = require('../utils/common/index');
const bookingservice= new booking();
// queuetigger.connect(booking.dataValues.userid)
async function createbookingservice(data1){
    
    try {
       
        
        const t=await sequelize.transaction();
            try {
                const response =await fetch(`${server.FLIGHT_PORT}/api/v1/flight/${data1.flightid}`);
            
                let flight= await response.json();
                
                if(data1.noofseats>flight.sucessresponse.data.totalseats){
                    throw new Error ('insucifficent seats')
                }
                
                await bookingservice.update_for_flight(flight,data1.noofseats)
                const totalcost=flight.sucessresponse.data.price;
                data1.totalcost=totalcost*(data1.noofseats);
                const booking = await bookingservice.create(data1, {transaction:t});
                console.log(booking);
                await t.commit();
                return booking.dataValues;
                
            } catch (error) {
                t.rollback()
                throw error
                
            }
            
            
                
            
           


            
        
       
      
    } catch (error) {
       
        throw error
        
    }
}
async function paymentservice(data){
    try {
            let t=await sequelize.transaction()
            try {
                const user = await  bookingservice.getone(data);
                console.log(user);
                if(!user) throw new Error('something went wrong');
                if(user.dataValues.userid!=data.userid) throw new Error('user not found');
                if(user.dataValues.flightid!=data.flightid) throw new Error('flight not found')
                if(user.dataValues.totalcost!=data.price) throw new Error ('enter the correct amount');
                
                queuetigger.connect(user.dataValues.userid)
                    
                
                t.commit();
                return user.dataValues
            } catch (error) {
                console.log(error);
                t.rollback()
                throw error
            }

       
    } catch (error) {

        throw error
    }
}
async function getallbokingservice(){
    try {
        const booking = await bookingservice.getAll();
        return booking
    } catch (error) {
        throw error
    }
}
module.exports={
    createbookingservice,
    getallbokingservice,
    paymentservice
}