const express =require('express')
require('dotenv').config()
const app=express()
const cors=require('cors')


app.set("view engine" , "ejs");

app.use(cors({
    origin:"http://localhost:3000",
}))

require('./routes/r-index')(app)

const PORT=process.env.PORT || 3002

app.listen(PORT , ()=>{
    console.log(`listning on port ${PORT}`);
})