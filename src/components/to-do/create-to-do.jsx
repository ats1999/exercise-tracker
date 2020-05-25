import React from 'react';
class CreateToDo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            todo_description:"",
            todo_responsible:'',
            todo_priority:'',
            todo_completed:false
        }
        this.onSubmit=this.onSubmit.bind(this);
        this.onChangeTodoDescription=this.onChangeTodoDescription.bind(this);
        this.onChangeTodoResponsible=this.onChangeTodoResponsible.bind(this);
        this.onChangeTodoPriority=this.onChangeTodoPriority.bind(this);
    }

    onChangeTodoDescription(e){
        this.setState({
            todo_description:e.target.value
        });
    }

    onChangeTodoResponsible(e){
        this.setState({
            todo_responsible:e.target.value
        });
    }
    onChangeTodoPriority(e){
        this.setState({
            todo_priority:e.target.value
        });
    }
    onSubmit(e){

    }
    render(){
        return(
            <div style={{margin:"100px"}}>
                <h1>Create new Todo</h1>
                <form onSubmit={this.onSubmit} action="">
                    <div className='form-group'>
                        <label htmlFor="Description">Description:</label>
                        <input type="text" className='form-control' value={this.state.todo_description} onChange={this.onChangeTodoDescription}/>
                    </div>

                    <div className='form-group'>
                        <label htmlFor="responsible">Responsible:</label>
                        <input type="text" className='form-control' value={this.state.todo_responsible} onChange={this.onChangeTodoResponsible}/>
                    </div>
                    
                    <div className='form-group'>
                        <label htmlFor="priority">Priority:</label><br/>
                        Low:
                        <input style={{marginRight:'20px',marginLeft:'20px'}} type="radio" id='low' name='priority' className='' value={this.state.todo_priority} onChange={this.onChangeTodoPriority}/>
                        Medium:
                        <input style={{marginRight:'20px',marginLeft:'20px'}} type="radio" id='low' name='priority' className='' value={this.state.todo_priority} onChange={this.onChangeTodoPriority}/>
                        High:
                        <input style={{marginRight:'20px',marginLeft:'20px'}} type="radio" id='low' name='priority'className='' value={this.state.todo_priority} onChange={this.onChangeTodoPriority}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateToDo;