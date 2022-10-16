const Category = require("../models/category")



const createCategoriesHandler=(req,res)=>{
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


module.exports={createCategoriesHandler}