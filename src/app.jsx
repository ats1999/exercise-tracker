import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route,Link} from 'react-router-dom';

// import components
import Navbar from './components/navigation/navbar';
import ExerciseList from './components/exercise/exercise.list';
import EditExercise from './components/exercise/edit.exercise';
import CreateExercise from './components/exercise/create.exercise';
import CreateUser from './components/user/create.user';
import DeleteUser from './components/user/delete.user'
import RemoveTodo from './components/to-do/remove-to-do';
import UserList from './components/user/user.list';

class App extends React.Component{
    render(){
        return(
            <Router >
                <Navbar/>
                <Route path='/' exact component={ExerciseList}/>
                <Route path='/edit/:id' component={EditExercise}></Route>
                <Route path="/create" component={CreateExercise}></Route>
                <Route path='/user' component={CreateUser}/>
                <Route path='/delete-user' component={DeleteUser}/>
                <Route path='/remove-todo' component={RemoveTodo}/>
                <Route path='/user-list' component={UserList}/>
            </Router>
        )
    }
}
export default App