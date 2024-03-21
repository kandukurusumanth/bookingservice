const {booking} = require('../repo/index');
const bookingservice= new booking();
async function createbookingservice(data){
    try {
        const booking = await bookingservice.create(data)
       return booking
    } catch (error) {
        console.log(error);
        throw error
        cd MUis
    }
}
module.exports={
    createbookingservice
}