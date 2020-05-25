const router = require('express').Router();
let Exercise = require('../models/exercise.model');

router.route('/').get((req,res)=>{
    Exercise.find().then(exercise=>{
        res.json(exercise);
    }).catch(err=>{
        res.status(400).json({Error:err});
    })
})

router.route('/add').post((req,res)=>{
    const userName=req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = new Date(req.body.date);
    
    console.log(userName+','+description+','+duration+","+date)
    const newExercise=new Exercise({
        username:userName,description:description,duration:duration,date:date
    });
    newExercise.save().then(()=>{
        res.json('New Exercise added!');
    }).catch(err=>{
        res.status(400).json({Error:err});
    })
});

router.get('/:id',(req,res)=>{
    Exercise.findById(req.params.id).then(exercise=>{
        res.json({exercise:exercise});
    }).catch(err=>{
        res.status(400).json({Error:err});
    })
})

router.delete('/id',(req,res)=>{
    Exercise.findByIdAndDelete(req.params.id).then(()=>{
        res.json({msg:"Exercise deleted !"});
    }).catch(err=>{
        res.status(400).json({Error:err});
    })
})

router.put('/update/:id',(req,res)=>{
    Exercise.findById(req.params.id).then(exercise=>{
        exercise.username=req.params.username;
        exercise.description=req.params.description;
        exercise.duration=Number(req.params.username);
        exercise.username=Date.parse(req.params.username);

        exercise.save().then(()=>{
            res.json({msg:'Exercise updated'});
        }).catch(err=>{
            res.status(400).json({Error:err})
        })
    }).catch(err=>{
        res.status(400).json({Error:err})
    })
})
module.exports=router;