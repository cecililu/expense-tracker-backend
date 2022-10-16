const {createCategoriesHandler} = require('../controller/controller')

const router= require('express').Router()

router.post('/categories/create',createCategoriesHandler)

module.exports=router