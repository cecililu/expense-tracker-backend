const mongoose= require('mongoose')

const dbConnect=()=>{
    mongoose.connect(process.env.ATLAS_URI,()=>{
    console.log('database connection succesful')
    })
}
module.exports=dbConnect