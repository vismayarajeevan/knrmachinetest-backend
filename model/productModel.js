const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    price:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    gst:{
        type:String,
        required:true
    }
})

const products = mongoose.model("products",productSchema)

module.exports = products