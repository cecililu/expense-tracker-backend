const express=require("express")
const dbConnect = require("./dbConnect")

const app=express()

require('dotenv').config()

const categoryRoute=require('./routes/routes')

app.use(express.json())
app.use('/api/v1',categoryRoute)


dbConnect()
app.listen(process.env.PORT,()=>{
    console.log('SERVER RUNNING IN PORT',process.env.PORT)
})


