const routes= require('express').Router()


const getCategoriesHandler=(req,res)=>{
   res.send('cate')
}


routes.get('/api/categories',getCategoriesHandler)
module.exports=routes