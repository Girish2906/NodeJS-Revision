const express = require('express') ; 
const app = express() ; 
const cluster = require('cluster') ; 
const os = require('os') ; 
const PORT = 3000 ; 
const connectDB = require('./utils/database') ; 
app.use(express.json()) ; 
const userRouter = require('./routes/user') ; 

console.log('totalCpus: ' , os.cpus().length) ; 

app.use('/' , userRouter) ; 

app.get('/' , (req , res) => {
    return res.status(200).json({iSuccess: true , message: 'Welcome to Nodejs Revision'} ) ; 
}) ; 

app.listen(PORT ,async  () => {
    try{
        await connectDB() ; 
        console.log('Server started on port ' , PORT) ;
    } catch(error){
        console.log('Error starting the server' , error) ; 
    }
}) ; 