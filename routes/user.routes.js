const express=require('express');
const router=express.Router();
const {body, validationResult}=require('express-validator');
const userModel=require('../models/user.models');
const bcrypt =require('bcrypt');
const jwt=require('jsonwebtoken');






router.get('/register',(req,res)=>{
    res.render('register');
})

router.post('/register',
   
    async(req,res)=>{
    const {email,username,password}=req.body;
    const hashPassword=await bcrypt.hash(password,10);

    const newUser=await userModel.create({
        username:username,
        email:email,
        password:hashPassword
        
    })

    res.json(newUser);
})

router.get('/login',(req,res)=>{
    res.render('login');
})

router.post('/login', 
    async(req,res)=>{
    const {username,password}=req.body;
    const user= await userModel.findOne({
        username:username
    })
    if(!user){
        return res.status(400).json({
            
            message:'invalid username'
        })
    }

    // const isMatch= await bcrypt.compare(password,user.password);
    

    // if(!isMatch){
    //     res.status(400).json({
    //         message:'invalid password'
    //     })
    // }
    


    const token=jwt.sign({
        userId:user._id,
        email:user.email,
        username:user.username
    },process.env.JWT_SECRET)

    res.cookie('token',token);
    res.send('logged in');

})



module.exports = router;