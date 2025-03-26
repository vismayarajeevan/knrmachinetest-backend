const products = require('../model/productModel')


exports.addProducts = async(req,res)=>{
    

    const {name,price,description,gst} = req.body

    try {

        const existingProduct = await products.findOne({name})

        if(existingProduct){
            res.status(404).json('Existing product..Please add new one!!!')
        }else{
            const newProduct = new products({
                name,price,description,gst
            })
            await newProduct.save()
            res.status(200).json(newProduct)
        }
        
    } catch (error) {
        console.log(error);
        
        res.status(500).json(error)
    }
    
}

exports.getProducts = async(req,res)=>{
    try {

        const getallProducts = await products.find()
        res.status(200).json(getallProducts)
        
    } catch (error) {
        console.log(error);
        
        res.status(500).json(error)
    }
}