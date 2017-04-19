
import {Router,Route,Link} from 'react-router';
import React from 'react';
import {render} from "react-dom";


const App=React.createClass({
    render(){
        return <div>
            <Link to="/a/abc.jpg">A</Link><span> | </span>{/* path='a/*.jpg'   *=** ==>/a/abc.jpg a/a/abc.jpg   适配所有字符  */}
            <Link to="/b">B</Link><span> | </span>
            <Link to="/c">C</Link><strong> | </strong>

            <Link to="/b/b1"/><span> | </span>{/* path='b1/:name'  b/b1/name   name:字符串  */}
            <Link to="/b/b2"/>{/* path='b2(/:name)'  可选  */}

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
                return <h4>B1{this.props.params.name}</h4>
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
        <Route path='a/*.jpg' component={A}></Route>
        <Route path='b' component={B}>
            <Route path='b1/:name' component={B1}></Route>
            <Route path='b2(/:name)' component={B2}></Route>
        </Route>
        <Route path='c' component={C}></Route>
    </Route>
</Router>,document.getElementById('div'))