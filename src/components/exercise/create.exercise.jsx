import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
class CreateExercise extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            description:'',
            duration:0,
            date:new Date(),
            users:[]
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/users').then(res=>{
            if(res.data.length>0){
                this.setState({
                    users:res.data.map(user=>user.username),
                    username:res.data[0].username
                })
                console.log(this.state.users)
            }
        })
    }
    onChangeUserName=(e)=>{
        this.setState({
            username:e.target.value
        })
    }
    onChangeDescription=(e)=>{
        this.setState({
            description:e.target.value
        })
    }
    onChangeDuration=(e)=>{
        this.setState({
            duration:e.target.value
        })
    }
    onChangeDate=(Date)=>{
        this.setState({
            date:Date
        })
    }
    onSubmit=(e)=>{
        e.preventDefault();
        const exercise={
            username:this.state.username,
            description:this.state.description,
            duration:this.state.duration,
            date:this.state.date
        }

        console.log(exercise);
        axios.post('http://localhost:5000/exercises/add',exercise).then(res=>{
            console.log(res.data)
        })
        window.location='/';
    }
    render(){
        const inputStyle={
            width:'60%',
            marginLeft:'20%',
            fontSize:'30px'
        }
        return(
            <div className='bg-light'>
                <h1>Create Exercise....!!!</h1>
                <form action="#" onSubmit={this.onSubmit}>
                    <div style={inputStyle} className='form-group'>
                        <label>User Name: </label>
                        <select ref='userInput' required className='form-control'
                        value={this.state.username} onChange={this.onChangeUserName}>
                            {
                                this.state.users.map((user)=>{
                                   return <option key={user} value={user}>
                                        {user}
                                    </option>
                                })
                            }
                        </select>
                    </div>
                    <div style={inputStyle}  className='form-group'>
                        <label>Description.</label>
                        <input className='form-control' type="text" value={this.state.description} onChange={this.onChangeDescription}/>
                    </div>
                    <div style={inputStyle}  className='form-group'>
                        <label>Duration.</label>
                        <input className='form-control' type="number" value={this.state.duration} onChange={this.onChangeDuration}/>
                    </div>
                    <div style={inputStyle} className='form-group'>
                        <DatePicker
                            selected={this.state.date}
                            onChange={this.onChangeDate}
                        />
                    </div>
                    <div className='form-group'>
                            <input style={inputStyle} type="submit" value="Create exercise log" className='btn btn-info'/>
                    </div>
                </form>
            </div>
        )
    }
}
export default CreateExercise;