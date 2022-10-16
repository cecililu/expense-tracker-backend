const controller = require('../controller/controller')

const router= require('express').Router()

router.post('/category',controller.createCategoryHandler)
router.get('/category',controller.getCategories)


router.post('/transaction',controller.createTransaction)
router.get('/transaction',controller.createTransaction)
router.delete('/transaction',controller.deleteTransaction)

router.get('/labels',controller.getLabels)

module.exports= router