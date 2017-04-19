const Redux=require('redux');

const applyMiddleware=Redux.applyMiddleware;



const logger=store=>nextDispatch=>action=>{

    console.log('start');
    let result=nextDispatch(action);

    console.log('end');

    return result;
}

const thunk=store=>nextDispatch=>action=>{

    if(typeof action==='function'){
        action(nextDispatch)
    }else {
        nextDispatch(action)
    }
}


const createStore=applyMiddleware(thunk,logger)(Redux.createStore);


const reducer=function (state,action) {
    if(typeof state ==='undefined'){return {name:''}}
    switch (action.type){
        case 'changeName':
            return {name:action.name}
        default:
            return state;
    }
}

const store=createStore(reducer,{name:'leo'});

store.subscribe(()=>{
    console.log(store.getState())
})


function thunkAtion(name) {
    return dispatch=>{
        setTimeout(function () {
            dispatch({type:'changeName', name})
        },3000)
    }
}

store.dispatch(thunkAtion('xun'))

store.dispatch({
    type:'changeName',
    name:'baobao'

})

console.log('-------')