require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const Product = require("./models/product.model.js")
const productRoute = require('./routes/product.route.js')
const app = express()
//midlleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.send("Hello world")
})
//routes 
app.use("/products", productRoute)

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Connected to database")
        app.listen(3000, () => {
            console.log("Server is running on port 3000")
        })
    }).catch(() => {
        console.log("DataBase connection failed")
    })



