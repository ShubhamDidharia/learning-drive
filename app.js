const express=require('express');

const userRoutes=require('./routes/user.routes');
const indexRoutes=require('./routes/index.routes');

const dotenv=require('dotenv');
dotenv.config();
const connectToDb=require('./config/db');
connectToDb();

const cookieParser=require('cookie-parser');


const app=express();


app.set("view engine",'ejs')
app.use(cookieParser());
app.use(express.json());

app.use(express.urlencoded({extended:true}));


app.use('/user', userRoutes);
app.use('/', indexRoutes);



app.listen(3000,()=>{
    console.log('server running at 3000')
})