const express = require('express');
const { bookingcontroller } = require('../../controllers/index');
const router = express.Router();

router.post('/', bookingcontroller.createbookingcontroller);
router.get('/',bookingcontroller.getallbokingcontroller);
router.post('/payment',bookingcontroller.paymentcontroller)
module.exports=router