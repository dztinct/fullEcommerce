const express = require('express')
const app = express()
const mongoose = require('mongoose')
const userRoutes = require('./routes/user.routes')
const productRoutes = require('./routes/product.routes')
require('dotenv').config()

const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.PORT

mongoose.connect(MONGO_URL, { useNewUrlParser : true }, () => {console.log('BD conn')})

app.use(express.urlencoded({extended : true}))
app.use(express.json())

app.use('/api/user', userRoutes)
app.use('/api/product', productRoutes )

// const PORT = process.require.PORT || 5000


app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})