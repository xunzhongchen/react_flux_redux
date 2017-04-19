
const React=require('react');
const ReactDOM=require('react-dom');
const redux=require('redux');
const {connect,Provider}=require('react-redux');

const Editor=require('./Editor');
const List=require('./List');


function reducer(state,action) {
    if(typeof state==='undefined'){
        return {list:[]}
    }

    switch (action.type){
        case 'add':
            let list= state.list.concat(action.value);
            return Object.assign({},state,{list});
        default:
            return state;
    }
}

const store=redux.createStore(reducer,{list:[]});

const actions={
    submit(value){
        return {
            type:'add',
            value
        }
    }
}


let App=React.createClass({
    render(){
        return (<div className="container">
            <List list={this.props.list}/>
            <Editor submit={this.props.submit}/>
        </div>)
    }
});

App=connect(state=>store.getState(),actions)(App);


ReactDOM.render(<Provider store={store}><App/></Provider>,document.getElementById('div'));