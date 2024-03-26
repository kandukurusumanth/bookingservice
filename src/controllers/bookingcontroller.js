const {bookingservice} = require('../service/index');
const { sucess } = require('../utils/common/error');
const{sucessresponse,errorresponse} = require('../utils/common/index')
async function createbookingcontroller(req,res){
    
    try {
        
        const booking = await bookingservice.createbookingservice({
            flightid:req.body.flightid,
            userid :req.body.userid,
            noofseats :req.body.noofseats,
            
            
        })
        console.log(booking);
        sucessresponse.data=booking
        return res.json({
            sucessresponse
        })
    } catch (error) {
        errorresponse.error=error.message
        res.json({
            errorresponse
        })

        throw error
        
    }
}
async function getallbokingcontroller(req,res){
    try {
        const booking = await bookingservice.getallbokingservice();
        sucessresponse.data=booking
        return res.json({
            sucessresponse
        })
    } catch (error) {
        
    }
}
async function paymentcontroller(req,res){
    try {
        const payment = await bookingservice.paymentservice({
            userid:req.body.userid,
            flightid:req.body.flightid,
            price:req.body.price
        })
        sucessresponse.data= payment
        return res.json({
            sucessresponse
        })
    } catch (error) {
        errorresponse.error=error
        return res.json({
            errorresponse
        })
    }
}
module.exports={
    createbookingcontroller,
    getallbokingcontroller,
    paymentcontroller
}