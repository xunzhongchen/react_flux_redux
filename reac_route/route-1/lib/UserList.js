import React from 'react';

// {users} array
export default React.createClass({
    render(){
        const userdom=this.props.users.map((user,index)=>{
            return <li key={index}>{user.name}</li>
        })
        return <ul>
            {userdom}
        </ul>
    }
})