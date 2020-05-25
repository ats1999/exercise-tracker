const mongoose=require('mongoose');

const Schema=mongoose.Schema;
const userName=new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        minlength:3,
        maxlength:50
    },
},{
    timestamps:true
});

const User=mongoose.model('User',userName);
module.exports=User;