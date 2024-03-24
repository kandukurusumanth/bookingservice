const {bookingservice} = require('../service/index');
const{sucessresponse,errorresponse} = require('../utils/common/index')
async function createbookingcontroller(req,res){
    
    try {
        
        const booking = await bookingservice.createbookingservice({
            flightid:req.body.flightid,
            userid :req.body.userid,
            noofseats :req.body.noofseats,
            
            
        })
        
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
module.exports={
    createbookingcontroller
}