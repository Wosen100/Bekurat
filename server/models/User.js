
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fisrtName:{
        type:String,

    },
    lastName:{
        type:String
    },
    password:{
        type:String
    },
    username:{
        type:String
    }
})


module.exports = mongoose.model('User',userSchema)