exports.start=(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', "*")
    console.log("backend is hit========================");
    res.send("hello world")
}