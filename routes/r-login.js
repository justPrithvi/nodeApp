const router=require('express').Router();
const loginCont=require('../controller/con-login')

router.get('/',loginCont.login)


module.exports=router