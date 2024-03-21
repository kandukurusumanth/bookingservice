const express = require('express');
const router = express.Router();
const info = require('./inforouter');
const booking  = require('./bookingrouter');
router.use('/info',info)
router.use('/booking',booking)
module.exports=router