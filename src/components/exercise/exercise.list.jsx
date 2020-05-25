import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Exercise(props){
    return(
        <tr>
        <td>{props.exercise.username}</td>
        <td>{props.exercise.description}</td>
        <td>{props.exercise.duration}</td>
        <td>{props.exercise.date.substring(0,10)}</td>
        <td>
            <Link to={'/edit/'+props.exercise._id}>Edit</Link>|<a href="#" onClick={()=>{props.deleteExercise(props.exercise._id)}}>Delete</a>
        </td>
    </tr>
    )
}
class ExerciseList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            exercises:[]
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/exercises').then(res=>{
            this.setState({exercises:res.data})
        })
        .catch(err=>{
            console.log(err);
        })
    }

    deleteExercise=(id)=>{
        axios.get('http://localhost:5000/exercises'+id)
        .then(res=>{
            this.setState({exercises:this.exercisess.filter(el=>el._id!==id)})
        })
        .catch(err=>{
            console.log(err);
        })
    }
    exerciseList=()=>{
        return this.state.exercises.map(currentExercise=>{
            return <Exercise exercise={currentExercise} deleteExercise={this.deleteExercise} key={currentExercise._id}/>
        })
    }
    render(){
        return(
            <div>
                <h1>ExerciseList  ....!!!</h1>
                <table className='table'>
                    <thead className='thead-light'>
                        <tr>
                            <th>User name: </th>
                            <th>Description: </th>
                            <th>Duration: </th>
                            <th>Date :</th>
                            <th>Actions:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.exerciseList()}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default ExerciseList;