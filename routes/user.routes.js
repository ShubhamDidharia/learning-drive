const express=require('express');
const router=express.Router();
const {body, validationResult}=require('express-validator');
const userModel=require('../models/user.models');
const bcrypt =require('bcrypt');






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
    res.render
})

router.post('/login', async(req,res)=>{

})



module.exports = router;