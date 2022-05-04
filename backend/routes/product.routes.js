const router = require('express').Router()
const { createProduct } = require('../controllers/productController')


router.post('/create', createProduct)

module.exports = router