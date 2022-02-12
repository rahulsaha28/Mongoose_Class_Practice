
const { Users } = require('../Model/User.Model');
const router = require('express').Router();


router.get('/or', async(req, res)=>{
    try {

        const users = await Users.find()
        res.status(200).json({
            status:"Success",
            code:res.statusCode,
            data:users
        })
        
    } catch (err) {
        res.status(404).json({
            status:"Error",
            code:res.statusCode,
            data:err
        })
    }
})




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