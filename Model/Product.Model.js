const mongoose = require('mongoose');

// schema of the products
const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true, 'The product must have a name.']
    },
    price:{
        type:Number,
        required:true
    },
    stoke:{
        type:Number,
        required:true
    },
    qty:{
        type:Array
    }
})

module.exports.Products = mongoose.model('Product', productSchema);
