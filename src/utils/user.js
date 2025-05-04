const mongoose = require('mongoose') ; 
const validator = require('validator') ; 


const newUserSchem = new mongoose.Schema({
    name: {
        type: String , 
        required: true , 
    } , 
    email: {
        type: String , 
        required: true , 
        unique: true , 
        validate: {
            validator: function(v){
                if(! validator.isEmail(v))
                    throw new Error("Email is not valid!") ; 
            }
        }
    } , 
    password: {
        type: String , 
        required: true , 
        validate: {
            validator: function(v){
                if(! validator.isStrongPassword(v))
                    throw new Error("Password is not strong!") ; 
            }
        }
    }
}) ; 

const NewUser = new mongoose.model('NewUser' , newUserSchem) ; 

module.exports = NewUser ; 