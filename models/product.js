const mongoose = require("mongoose")

const Product = mongoose.model('Product',{
    id:String,
    productName:String,
    categoryId:String,
    description: String,
    productImage: String,
    isAvailable: Boolean,
    price:Number,
    rating:String,
    review:String,
    vendorName:String,
    warranty:String,
})
module.exports = {Product}