const express=require('express');
const router=express.Router();
const {body, validationResult}=require('express-validator');
const userModel=require('../models/user.models');





router.get('/register',(req,res)=>{
    res.render('register');
})

router.post('/register',
    body('email').trim().isEmail().isLength({min:5}),
    body('username').trim().isLength({min:3}),
    body('password').trim().isLength({min:4}),
    async(req,res)=>{

    const errors=validationResult(req)    
    
    if(!errors.isEmpty()){
        return res.status(400).json({
            errors:errors.array(),
            message:'invalid data'

        })
    }
   
    const {email,username,password}=req.body;

    const newUser=await userModel.create({
        username:username,
        email:email,
        password:password
    })

    res.json(newUser);
})



module.exports = router;