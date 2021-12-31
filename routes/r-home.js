const router=require('express').Router();
const homeCont=require('../controller/con-home')

router.get('/',homeCont.home)


module.exports=router