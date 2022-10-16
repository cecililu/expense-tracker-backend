const mongoose=require('mongoose')

const Schema=mongoose.Schema;


const Categories=new Schema({
   type:{
      type:String,
      default:"investment"
   },
   color:{
    type:String,
    default:'#FCBE44'   

}
})
const Category=mongoose.model('Category',Categories)

module.exports=Category