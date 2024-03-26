const CrudRepository = require("./crudrepo");
const {booking} = require('../models/index');

const {server}= require('../config/index')

const {Flights} = require(`${server.FLIGHT_FILE}/models/index`);
console.log(Flights);
const error = require('../utils/common/error');
const { bookingservice } = require("../service");
class bookingclass extends CrudRepository{
    constructor(){
        super(booking)
    }
    async update_for_flight(flight,noofseats){
        let response=flight.sucessresponse.data;
        
        try {
            
            const respone_flight= await Flights.findByPk(response.id);
            respone_flight.decrement(['totalseats'],{by:noofseats});
        
           
        } catch (error) {
            throw error
        }
    }
    async getone(data){
        console.log(data);
        try {
            const user = await booking.findOne({
                where:{
                    userid:data.userid,
                    flightid:data.flightid,
                    totalcost:data.price
                }
            })
            return user
        } catch (error) {
            throw error

        }
    }
}
module.exports=bookingclass