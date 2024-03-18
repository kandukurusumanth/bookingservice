const express = require('express');
const router = express.Router();
const info = require('./inforouter')
router.use('/info',info)
module.exports=router