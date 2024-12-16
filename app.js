const express=require('express');

const userRoutes=require('./routes/user.routes');

const dotenv=require('dotenv');
dotenv.config();
const connectToDb=require('./config/db');
connectToDb();


const app=express();


app.set("view engine",'ejs')
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/user', userRoutes)



app.listen(3000,()=>{
    console.log('server running at 3000')
})