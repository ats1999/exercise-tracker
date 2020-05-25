import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route,Link} from 'react-router-dom';

import ToDoList from './components/to-do-list';
import EditToDo from  './components/edit-to-do';
import CreateToDo from './components/create-to-do';
import logo from './logo.svg'
class App extends React.Component{
    render(){
        return(
            <Router>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                     <a class="navbar-brand" href="#" target="_blank">
                        <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
                    </a>
                    <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
                    <div className="collpase navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="navbar-item">
                                <Link to="/" className="nav-link">Todos</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/create" className="nav-link">Create Todo</Link>
                            </li>
                            <li className="navbar-item">
                                <a href="#">Edit Todo</a>
                            </li>
                        </ul>
                    </div>
             </nav>
          <br/>
                    <Route path='/' exact component={ToDoList} />
                    <Route path='/eidt/:id' component={EditToDo} />
                    <Route path='/create'  component={CreateToDo} />
                </div>
            </Router>
        )
    }
}

export default App