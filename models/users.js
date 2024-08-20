const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    email :{
        type: String, 
        required: true,
        unique: true,
        lowercase: true,
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    name : {
        type: String,
        required: true,
        
    }},
   {
    timestamps: true
   }
)

const User = mongoose.model('User' , userSchema); 

module.exports = User;