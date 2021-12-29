const express =require('express')
require('dotenv').config()
const app=express()
const startRoute = require("./routes/start")

app.set("view engine" , "ejs");
app.use("/", startRoute)

const PORT=process.env.PORT || 3002

app.listen(PORT , ()=>{
    console.log(`listning on port ${PORT}`);
})