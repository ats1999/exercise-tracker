import React from 'react';
import axios from 'axios';
class CreateUser extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:''
        }
    }

    onChangeUserName=(e)=>{
        this.setState({
            username:e.target.value
        })
    }

    onSubmit=(e)=>{
        e.preventDefault();
        const user={
            username:this.state.username
        }

        console.log(user);
        axios.post('http://localhost:5000/users/add',user).then(res=>{
            console.log(res.data)
        })
        this.setState({
            username:''
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
                    <div style={inputStyle}  className='form-group'>
                        <label>User Name:</label>
                        <input required className='form-control' type="text" value={this.state.username} onChange={this.onChangeUserName}/>
                    </div>
                    <div className='form-group'>
                            <input style={inputStyle} type="submit" value="Create User" className='btn btn-info'/>
                    </div>
                </form>
            </div>
        )
    }
}
export default CreateUser;