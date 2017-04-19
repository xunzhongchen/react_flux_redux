const Redux=require('redux');

const applyMiddleware=Redux.applyMiddleware;



const logger=store=>nextDispatch=>action=>{
    console.log('start');

    let result=nextDispatch(action);

    console.log('end');

    return result;
}


const promise=store=>nextDispatch=>action=>{

    if(action instanceof Promise){

        action.then(function (action) {
            nextDispatch(action)
        })
    }else {
        nextDispatch(action)
    }
}


const createStore=applyMiddleware(promise,logger)(Redux.createStore);


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



function promiseAtion(name) {
    return new Promise((resolve,reject)=>{
       /* resolve({
            type:'changeName',
            name
        })*/

        setTimeout(function () {
            resolve({
                type:'changeName',
                name
            })
        },2000)
    })
}


store.dispatch(promiseAtion('xun'))


console.log('first')


