const Category = require("../models/category")



const createCategoriesHandler=(req,res)=>{

    const category=new Category({
        type:req.type,
        color:req.color
    })

    category.save()
 
}


module.exports={createCategoriesHandler}