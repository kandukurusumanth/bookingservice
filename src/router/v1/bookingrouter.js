const express = require('express');
const { bookingcontroller } = require('../../controllers/index');
const router = express.Router();

router.post('/', bookingcontroller.createbookingcontroller);
module.exports=router