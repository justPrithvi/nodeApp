exports.start=(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', "*")
    res.send("hello world")
}