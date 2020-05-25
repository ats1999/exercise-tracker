const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req,res)=>{
    User.find().then(user=>{
        res.json(user);
    }).catch(err=>{
        res.status(400).json({Error:err});
    })
})

router.route('/add').post((req,res)=>{
    const userName=req.body.username;
    console.log('User name is : '+userName);
    const newUser=new User({username:userName});
    newUser.save().then(()=>{
        res.json('User added!');
    }).catch(err=>{
        res.status(400).json({Error:err});
    })
})    

module.exports=router;