const express = require('express') ; 
const User = require('../utils/user') ; 
const userRouter = express.Router() ; 

userRouter.post('/create' , async (req , res) => {
    try{
        console.log('got here' , req.body) ; 
        // const saveUser = new User(req.body) ; 
        // await saveUser.save() ;
        await User.create(req.body) ; 
        return res.status(200).json({isSuccess: true , message: 'User created successfully' , data: req.body}) ;
    } catch(error){
        return res.status(400).json({isSuccess: false , message: error.message}) ; 
    }
}) ; 

userRouter.patch('/update' , async (req , res) => {
    try{
        const {email} = req.body ; 
        const user = await User.findOne({email}) ; 
        user.name = req.body.name ; 
        await user.save() ; 
        console.log(20 , user) ; 
        return res.status(200).json({isSuccess: true , message: 'User updated successfully' }) ;
    } catch(error){
        return res.status(400).json({isSuccess: false , message: error.message}) ; 
    }
} )

// userRouter.put(/'/ ')

module.exports = userRouter ; 