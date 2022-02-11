const { Users } = require('../Model/User.Model');
const router = require('express').Router();

// @get users->where('_id')
router.get('/where/id', async(req, res)=>{
    try {
        const query = await Users.where('_id')
        res.status(200).json({
            status:"Success",
            code:res.statusCode,
            'message':"where is used in this process.",
            data:query
        })
    } catch (err) {
        res.status(404).json({
            status:"Error",
            code:res.statusCode,
            message:"Error happen"
        })
    }

});

// @get ->$where(fn->true/false)
router.get('/where/name', async(req, res)=>{
    try {
        const query = await Users.$where(function(){
            return this.name === "nakib" || this.name === "milon" || this.email === "rafid@gmail.com"
        })
        res.status(200).json({
            status:"Success",
            code:res.statusCode,
            'message':"where is used in this process.",
            data:query
        })
    } catch (err) {
        res.status(404).json({
            status:"Error",
            code:res.statusCode,
            message:"Error happen",
            data:err
        })
    }

});







// @create users
router.post('/', async(req, res)=>{
    try {
        const user = await Users.create(req.body);
        if(user){
            res.status(200).json({
                status:'success',
                message:'User registration successfully.',
                code:res.statusCode
            })
        }
        else{
            res.status(404).json({
                status:'error',
                message:'User registration fail.',
                code:res.statusCode
               
            })
        }
        
    } catch ({ message }) {
        res.status(404).json({
            status:'error',
            message,
            code:res.statusCode
        })
    }
});



module.exports = router;