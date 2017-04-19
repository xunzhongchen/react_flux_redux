
import {createAction,createStore}  from 'reflux';


import React from 'react';

import ReactDOM from 'react-dom';


const action=createAction();


const store=createStore({
    init(){
        this.num=0;
        this.listenTo(action,this.onCkick)
    },
    onCkick(){
        this.trigger(++this.num);
    }
})



var UI=React.createClass({

    getInitialState:function () {
        return {
            num:0
        }
    },

    componentDidMount:function () {
        this.unsubscribe=store.listen(
            num=>this.setState({num})
        )
    },


    componentWillUnmount:function () {
        this.unsubscribe();
    },





    render:function () {
        return (<div>
            {this.state.num}
            <div>
                <button onClick={action}>+</button>
            </div>

        </div>)
    }
})

ReactDOM.render(<UI/>,document.body)
