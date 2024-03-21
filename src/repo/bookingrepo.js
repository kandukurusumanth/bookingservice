const CrudRepository = require("./crudrepo");
const {booking} = require('../models/index')
class bookingclass extends CrudRepository{
    constructor(){
        super(booking)
    }
}
module.exports=bookingclass