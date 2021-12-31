const router=require('express').Router();
const registerCont=require('../controller/con-register')

router.get('/',registerCont.register)


module.exports=router