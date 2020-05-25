const express=require('express');
const cors = require('cors');
const mongoose=require('mongoose');
require('dotenv').config();
const app = express();

const port=process.env.PORT||3000;
const url=process.env.MONGO_URL;
app.use(cors());
app.use(express.json());

// conncect database. 
mongoose.connect(url,
    {useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true}
);

// get connection
const connection = mongoose.connection;

// check connection
connection.once('open',()=>{
    console.log("Database connected..");
})

// configure routes
const exerciseRouter = require('./routes/exercise');
const userRouter=require('./routes/user');
app.use('/exercises',exerciseRouter);
app.use('/users',userRouter);

// listen on port   
app.listen(port,(err)=>{
    if(!err) 
        console.log("server is started....!!!!")
    else console.log("Problem....!!!!")
})