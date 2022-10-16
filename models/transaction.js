const mongoose= require('mongoose')

const Schema= mongoose.Schema;


const Transactions= new Schema({
   name:{
      type:String,
      default:"Anonymous"
   },

    type:{
    type:String,
    default:'Investment'   
},
    amount:{
    type:Number   
    },
    date:{
        type:Date,
        default:Date.now
    }
})
const Transaction=mongoose.model('Transaction',Transactions)
module.exports=Transaction