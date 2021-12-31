const router=require('express').Router();
const contactCont=require('../controller/con-contact')
const middle = (req,res ,next) =>{
    next()
}
router.get('/',middle, contactCont.contact)


module.exports=router