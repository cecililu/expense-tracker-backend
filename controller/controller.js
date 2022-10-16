const { model } = require("mongoose")
const Category = require("../models/category")
const Transaction = require("../models/transaction")



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

exports.createTransaction=(req,res)=>{
    
    if(!req.body) return res.status(400).json({error:"Data not provided"})
    
    let { name,type,amount}= req.body
    
    let create=new Transaction({ name, type, amount })
    
    create.save((err,data)=>{
        if (err){
            return res.status(400).json({
                error:err
            })
        }
         res.json({data});
     })


}

exports.getTransaction=async(req,res)=>{
    let data= await Transaction.find({})
    return res.json(data)
 }

exports.deleteTransaction=async(req,res)=>{
 
if(!req.body) return res.send({error:"no id srnt"})
 
await Transaction.deleteOne(req.body,(err,data)=>{
 if(err) return res.status(500).json({error:"Could not delete"}) 
 return res.json(data)
})

}

exports.getLabels=async(req,res)=>{
 

   Transaction.aggregate([
   { 
    $lookup:{
        from:"categories",
        localField:"type",
        foreignField:"type",
        as:"category_info"
    }
   },
  {
    $unwind:"$category_info",

   }
  ]).then(result=>{

    let data=result.map(v=>Object.assign({},{_id : v._id,name:v.name,type:v.type,amount:v.amount,color:v.category_info.color}))
      res.json(data)
  }).catch(error=>{
      res.status(400).json(error)
  })
}