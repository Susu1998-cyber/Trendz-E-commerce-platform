const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

const userRegistrationRoutes = require('./routes/userRegistrationRoutes')
const userLoginRoutes = require('./routes/userLoginRoutes')
const productRoutes = require('./routes/productRoutes')
const app = express()
app.use(express.json())
app.use(bodyParser.json())
app.use(cors())


mongoose.connect('mongodb://localhost:27017/ecommerceplatform',{useNewUrlParser:true,useUnifiedTopology:true})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error.message)
})

app.use('/api/user/register',userRegistrationRoutes)
app.use('/api/user/login',userLoginRoutes)
app.use('/api/admin/Product',productRoutes)

app.listen(5000,() => {
    console.log(`Server is running on port:${5000}`);
})