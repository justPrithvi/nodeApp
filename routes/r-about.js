const router=require('express').Router();
const aboutCont=require('../controller/con-about')

router.get('/',aboutCont.about)


module.exports=router