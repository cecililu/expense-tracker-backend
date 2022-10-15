const {getCategoriesHandler} = require('../controller/controller')

const router= require('express').Router()

router.get('/categories',getCategoriesHandler)
module.exports=router