const Redux=require('redux');

const applyMiddleware=Redux.applyMiddleware;



const logger=store=>nextDispatch=>action=>{
    console.log('start');

    let result=nextDispatch(action);

    console.log('end');

    return result;
}

const createStore=applyMiddleware(logger)(Redux.createStore);

//const createStore=applyMiddleware(logger,middle1,middle2)(Redux.createStore);

const reducer=function (state,action) {
    if(typeof state ==='undefined'){return {name:''}}
    switch (action.type){
        case 'changeName':
            return {name:action.name}
        default:
            return state;
    }
}

const store=createStore(reducer,{nme:'leo'});
store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch({name:'xun',type:'changeName'})