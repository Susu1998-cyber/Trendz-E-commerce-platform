const express = require('express')
const router = express.Router()
const {Product} = require('../models/product');
const {resolvePath} = require('react-router-dom')

function generateUniqueId() {
    
    return Math.floor(Math.random() * 1000000);
}

//Route to add new product
router.post('/addproduct',async (req,res) => {
    const { productName, categoryId, price, rating, review, vendorName, warranty,productImage } = req.body

    try{
        console.log('Received data:',req.body);
        
        // Generate a unique id for the product
        const id = generateUniqueId(); // You need to implement this function
        
        const existingProduct = await Product.findOne({id})

        if(existingProduct){
            return res.status(400).json({error:'Product with this ID already exists'})
        }
        const product = new Product({id, productName, categoryId, price, rating, review, vendorName, warranty,productImage})
        await product.save()
        
        res.status(201).json({message:'Product added successfully', product})
    } catch (error){
        console.error('Error adding product',error)
        res.status(500).json({
            message:'Server error',
            error:error.message,
        })
    }
})

router.put('/editProduct/:productId', async(req,res) => {
    const productId = req.params.productId
    const updatedProductData = req.body
    try{
        //FIND THE PRODUCT BY ID
        const product = await Product.findOne({id:productId})


        if(!product){
            return res.status(404).json({message:'Product not found'})

        }
        //UPDATE THE PRODUCT WITH NEW DATA
        Object.assign(product,updatedProductData)
        await product.save()
        res.status(200).json(product)
    } catch(error){
        console.error(error)
        res.status(500).json({message:'server error',error:error})
    }
})
router.delete('/delete-product/:productId',async(req,res) => {
    const productId = req.params.productId
    try{
        //FIND THE PRODUCT BY ID AND DELETE IT
        const deletedProduct = await Product.findOneAndDelete({id:productId})
        
        //CHECK IF THE PRODUCT WAS NOT FOUND
        if(!deletedProduct){
            return res.status(404).json({message:'Product not found'})
        }
        //RESPOND WITH A SUCCESS MESSAGE
        res.status(200).json({message:'Product deleted successfully'})
    } catch (error){
        //HANDLE SERVER ERRORS
        console.error(error)
        res.status(500).json({message:'Server error',error})
    }
})
router.get("/viewProduct",async(req,res) => {
    try{
        const viewProducts = await Product.find()
        if(viewProducts){
            res.setHeader('Content-Type','application/json')
            res.status(200).json({
                message:'The products',
                product:viewProducts
            })
        }
        else{
            res.status(400).json(
                {
                    message:"error in fetching product"
                }
            )
        }
    }
    catch{
        console.log('error');
    }
})
router.get('/viewProduct/:productId',async (req,res) => {
    const productId = req.params.productId

    try{
        //FIND THE PRODUCT BY ID
        const product = await Product.findOne({id:productId})

        if(!product){
            return res.status(404).json({message:'Product not found'})
        }
        res.status(200).json({product})
    } catch(error){
        console.error(error)
        res.status(500).json({message:'Server error',error:error})
    }
})
module.exports = router;