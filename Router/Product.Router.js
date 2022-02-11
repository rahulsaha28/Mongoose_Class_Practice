const { Products } = require('../Model/Product.Model');
const router = require('express').Router();

router.get('/and', async(req, res)=>{

    try {

        const products = await Products.where('qty').and([{stoke:80}, {price:1240}])
        res.status(200).json({
            code:res.statusCode,
            status:"Success",
            data:products
        })
    } catch (err) {
        res.status(404).json({
            code:res.statusCode,
            status:"Error",
            data:err
        })
    }
});

router.post('/', async(req, res)=>{
    try {
        const product = await Products.create(req.body);
        if(product){
            res.status(200).json({
                status:'success',
                message:'Create the product successfully.',
                code:res.statusCode
            })
        }
        else{
            res.status(404).json({
                status:'error',
                message:'Fail to create the product',
                code:res.statusCode
               
            })
        }
        
    } catch (err) {
        res.status(404).json({
            status:'error',
            message:"Fail to create the product.",
            code:res.statusCode
        })
    }
});



module.exports = router;