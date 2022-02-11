const express = require('express');
const app = express();

// use json object 
app.use(express.json());

// app use the router
app.use('/api/v1/products', require('../Router/Product.Router'));
app.use('/api/v1/users', require('../Router/User.Router'));

module.exports = app;