
import React from 'react';
import { Router, Route,Link, browserHistory } from 'react-router';


export default React.createClass({
    render(){
        return (<div>
            <nav>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/users">User List</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>

        </div>)
    }
})