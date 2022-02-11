const { Products } = require('../Model/Product.Model');
const router = require('express').Router();

router.get('/', (req, res)=>{

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