const express=require("express")
const getCategoriesRoute=require('./routes/routes')
const app=express()
const cors=require('cors')

app.use(cors)
app.use(express.json())

app.use(getCategoriesRoute)


app.listen(3000,()=>{
    console.log("run")
})