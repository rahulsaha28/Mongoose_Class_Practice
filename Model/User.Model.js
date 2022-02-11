const mongoose = require('mongoose');

// schema of the users
const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true, 'The user must have a name.']
    },

    address:{
        type:String
    },
    email:{
        type:String,
        required:[true, 'User must have a Email.']
    },
    password:{
        type:String,
        required:[true, 'User must have a password']
    },

    role:{
        type:Array,
        default:['user']
    }
   
})

module.exports.Users = mongoose.model('User', userSchema);
