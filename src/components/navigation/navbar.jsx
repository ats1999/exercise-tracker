import React from 'react';
import {Link} from 'react-router-dom';

class Navbar extends React.Component{
    render(){
        return(
            <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
                <Link to='/' className='navbar-brand'>Exercise Tracker</Link>
                <div className='collpase navbar-collpase'>
                    <ul className='navbar-nav mr-auto'>
                        <li className='navbar-item'>
                            <Link to='/' className='nav-link'>Exercises</Link>
                        </li>
                        <li className='navbar-item'>
                            <Link to='/create' className='nav-link'>Create Exercise log</Link>
                        </li>
                        <li className='navbar-item'>
                            <Link to='/user' className='nav-link'>Create user</Link>
                        </li>
                        <li className='navbar-item'>
                            <Link to='/delete-user' className='nav-link'>Delete user</Link>
                        </li>
                        <li className='navbar-item'>
                            <Link to='/remove-todo' className='nav-link'>Remove erercise</Link>
                        </li>
                        <li className='navbar-item'>
                            <Link to='/user-list' className='nav-link'>Users</Link>
                        </li>
                    </ul>
                </div>
            </nav>  
        )
    }
}
export default Navbar;