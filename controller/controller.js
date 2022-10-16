const Category = require("../models/category")



exports.createCategoryHandler=(req,res)=>{
    const category=new Category(req.body)
    category.save((err,data)=>{
       if (err){
           return res.status(400).json({
               error:err
           })
       }
        res.json({data});
    })
}

exports.getCategories=async(req,res)=>{
   let data= await Category.find({})
   return res.json(data)
}