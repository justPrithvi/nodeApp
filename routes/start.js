const express=require('express');
const router = express.Router();

const start= require('../controller/start')

router.get("/",start.start)

module.exports=router;