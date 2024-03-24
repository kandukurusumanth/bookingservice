const CrudRepository = require("./crudrepo");
const {booking} = require('../models/index');

const {server}= require('../config/index')

const {Flights} = require(`${server.FLIGHT_FILE}/models/index`);
console.log(Flights);
const error = require('../utils/common/error');
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
}
module.exports=bookingclass