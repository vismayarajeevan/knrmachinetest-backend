const express = require('express')

const productController = require('../controller/productController')

const router = express.Router()


router.post("/addProduct",productController.addProducts)

module.exports = router