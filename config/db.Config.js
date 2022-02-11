const mongoose = require('mongoose');

// connected to the db
module.exports.DBConncetion = ()=>{
    mongoose.connect("mongodb://localhost:27017/App");
}