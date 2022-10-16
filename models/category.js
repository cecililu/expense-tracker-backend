const mongoose=require('mongoose')




const CategorySchema=new mongoose.Schema({
   type:{
      type:String,
      default:"Investment"
   },
   color:{
    type:String,
    default:'#FCBE44'   

}
})


module.exports=mongoose.model('Category',CategorySchema)