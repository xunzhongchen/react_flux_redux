
import {Router,Route,Link} from 'react-router';
import React from 'react';
import {render} from "react-dom";


const App=React.createClass({
    render(){
        return <div>
            <Link to="/a">A</Link><span> | </span>
            <Link to="/b">B</Link><span> | </span>
            <Link to="/c">C</Link><strong> | </strong>

            <Link to="/b/b1"/><span> | </span>
            <Link to="/b/b2"/>

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
        return <ul>
            <li><Link to="/b/b1"/></li>
            <li><Link to="/b/b2"/></li>
            <li>
                {this.props.children}
            </li>
        </ul>
    }
})


        const B1=React.createClass({
            render(){
                return <h4>B1</h4>
            }
        })

        const B2=React.createClass({
            render(){
                return <h4>B2</h4>
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
        <Route path='b' component={B}>
            <Route path='b1' component={B1}></Route>
            <Route path='b2' component={B2}></Route>
        </Route>
        <Route path='c' component={C}></Route>
    </Route>
</Router>,document.getElementById('div'))