const express = require('express');
const router = express.Router();
const { infocontroller } = require('../../controllers/index');
console.log(infocontroller.check);
router.get('/',infocontroller.check)


module.exports=router
