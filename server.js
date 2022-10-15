const express=require("express")

const app=express()

require('dotenv').config()

const categoryRoute=require('./routes/routes')




// app.use(expressValidator)
app.use('/api/v1',categoryRoute)



app.listen(process.env.PORT,()=>{
    console.log('SERVER RUNNING IN PORT',process.env.PORT)
})


