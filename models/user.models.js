const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true,
        minlength:[3,'must be atleast 3 char long'],
        trim:true,
        lowercase:true
    },
   
    email:{
        type:String,
        unique:true,
        required:true,
        minlength:[5,'must be atleast 3 char long'],
        trim:true,
        lowercase:true
    },
    password:{
        type:String,
        unique:true,
        required:true,
        minlength:[4,'must be atleast 3 char long'],
        trim:true,
        lowercase:true
    }

})

const userModel=mongoose.model('user', userSchema);

module.exports=userModel;