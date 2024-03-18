const express = require('express');
const router = express.Router();
const { infocontroller } = require('../../controllers/index');

router.get('/',infocontroller.check)


module.exports=router
