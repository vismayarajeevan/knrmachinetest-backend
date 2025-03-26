const products = require('../model/productModel')


exports.addProducts = async(req,res)=>{
    console.log('inside add');

    res.status(200).json("add")
    
}