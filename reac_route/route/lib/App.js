
import React from 'react';
import ReactDom from 'react-dom';
import {connect,Provider} from 'react-redux';
import {createStore} from 'redux';


import actions from './actions';
import reducer from './reducer';


import _Navbar from './Navbar';
import _UserList from './UserList';
import About from './About';
import Login from './Login';



const store=createStore(reducer)

const Navbar=connect(null,actions)(_Navbar);
const UserList=connect(state=>state)(_UserList);




let App= React.createClass({

    getCurrentPage(){
       /* switch (this.props.linkName){
            case 'about':
                return <About/>;
            case 'users':
                return <UserList users={this.props.users}/>
            case 'login':
                return <Login/>

        }*/
        switch (this.props.linkName){
            case 'about':
                return <About/>;
            case 'users':
                return <UserList/>
            case 'login':
                return <Login/>

        }
    },

    render(){
        return <div>
            {/*<Navbar link={this.props.link}/>*/}
            <Navbar/>
            {this.getCurrentPage()}
        </div>
    }
})


App=connect(state=>state,actions)(App)




ReactDom.render(<Provider store={store}><App/></Provider>,document.getElementById('div'))




















