const React=require('react');
const ReactDOM=require('react-dom');
const Redux=require('redux');

const {connect,Provider}=require('react-redux')


function reducer(state,action) {
    if(typeof state==='undefined'){
        return {
            name:'',
            num:0
        }
    }

    switch (action.type){
        case 'changeName':
            return Object.assign({},state,action.payload);
        case 'access':
            return Object.assign({},state,{num:state.num+1});

        default:
            return state;
    }
}

const store=Redux.createStore(reducer);


let actions={
    changeName(name){
        return {
            type:'changeName',
            payload:{name}
        }
    },
    access(){
        return {
            type:'access'
        }
    }
}




//-----------------------------

let UI=React.createClass({
    render(){
        return (<div>
            <p>{this.props.name}</p>
            <div>{this.props.num}</div>
            <input onChange={event=>this.props.changeName(event.target.value)}/>
            <button onClick={event=>this.props.access()}>access</button>
        </div>)
    }
})



/*function getState(state) {
    console.log('get state function ...')
    return store.getState();
}*/

function getState(state,props) {
    console.log('get state function ...')
    return store.getState();
}


//connect(mapStateToProps,mapDispathToProps)
UI=connect(getState,actions)(UI);


function render(name) {
    console.log('render')
    ReactDOM.render(<Provider store={store}><UI name={name}/></Provider>,document.getElementById('div'))
}

render('xun')

setTimeout(function () {
    render('zhong')
},1000)




