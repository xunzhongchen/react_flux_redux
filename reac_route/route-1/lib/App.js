
import React from 'react';
import ReactDom from 'react-dom';
import {connect,Provider} from 'react-redux';
import {createStore} from 'redux';
import { Router, Route, browserHistory } from 'react-router';


import reducer from './reducer';


import _UserList from './UserList';
import Navbar from './Navbar';
import About from './About';
import Login from './Login';


const store=createStore(reducer)
const UserList=connect(state=>state)(_UserList);


let App= React.createClass({

    render(){
        return <div>
            <Navbar/>
            {this.props.children}
        </div>
    }
})


App=connect(state=>state)(App)


// ReactDom.render(<Provider store={store}><App/></Provider>,document.getElementById('div'))

ReactDom.render(<Provider store={store}>
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <Route path='about' component={About}/>
            <Route path='users' component={UserList}></Route>
            <Route path='login' component={Login}/>
        </Route>
    </Router>
</Provider>,document.getElementById('div'))


















