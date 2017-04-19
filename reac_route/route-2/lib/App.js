
import {Router,Route,Link} from 'react-router';
import React from 'react';
import {render} from "react-dom";


const App=React.createClass({
    render(){
        return <div>

            <Link to="/a">A</Link><span> | </span>
            <Link to="/b">B</Link><span> | </span>
            <Link to="/c">C</Link>

            <hr/>
            <div>
                {this.props.children}
            </div>
        </div>
    }
})


const A=React.createClass({
    render(){
        return <h4>A</h4>
    }
})


const B=React.createClass({
    render(){
        return <h4>B</h4>
    }
})

const C=React.createClass({
    render(){
        return <h4>C</h4>
    }
})


render(<Router>
    <Route path="/" component={App}>
        <Route path='a' component={A}></Route>
        <Route path='b' component={B}></Route>
        <Route path='c' component={C}></Route>
    </Route>
</Router>,document.getElementById('div'))