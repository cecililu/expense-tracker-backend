const controller = require('../controller/controller')

const router= require('express').Router()

router.post('/category',controller.createCategoryHandler)
router.get('/category',controller.getCategories)
module.exports=router