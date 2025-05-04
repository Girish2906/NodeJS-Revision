const mongoose = require("mongoose") ; 

const mongooseURL = "mongodb+srv://girishbhargava:BquG0D857Y1Eg80K@backenddecoded.2un9g.mongodb.net/" ; 

const connectDB = async () => {
    try{
        await mongoose.connect(mongooseURL) ; 
        console.log('Connected to the database') ;
    }
    catch(error){
        console.log('Error connecting to the database' , error) ; 
    }
} ; 

module.exports = connectDB ; 