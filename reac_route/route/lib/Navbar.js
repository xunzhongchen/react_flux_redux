
import React from 'react';

export default React.createClass({
    render(){
        return (<div>
            <nav>
                <ul>
                    <li><a href="#" onClick={e=>{
                            this.props.link('about');
                            return false;
                        }
                    }>About</a></li>


                    <li><a href="#" onClick={e=>{
                            this.props.link('users');
                            return false;
                        }
                    }>User List</a></li>

                    <li><a href="#" onClick={e=>{
                            this.props.link('login');
                            return false;
                        }
                    }>Login</a></li>
                </ul>
            </nav>

        </div>)
    }
})