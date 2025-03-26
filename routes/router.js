const express = require('express')

const productController = require('../controller/productController')

const router = express.Router()


router.post("/addProduct",productController.addProducts)
router.get("/getProduct",productController.getProducts)
router.delete("/deleteProduct/:id",productController.deleteProducts)
router.put("/updateproduct/:id",productController.editProducts)




module.exports = router