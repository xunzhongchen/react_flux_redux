const redux=require('redux');
const thunk=require('redux-thunk').default;

// import thunk from 'redux-thunk';



//let createStore= redux.applyMiddleware(thunk)(redux.createStore);//写法过时了
function reducer(state,action) {
    if(typeof state==='undefined'){
        return {}
    }

    switch (action.type){
        case 'changeName':
            return {
                name:action.name
            }

        default :
            return state;
    }
}

// const store=redux.createStore(reducer,redux.applyMiddleware(thunk));

const store=redux.createStore(reducer,redux.applyMiddleware(thunk.withExtraArgument({default:'javascript'})));




store.subscribe(()=>{
    console.log(store.getState())
})


let asyncAction=function(name) {
    let action={
        type:'changeName',
        name
    }


    return (dispatch,getState,api) => {
        console.log(api)
        setTimeout(() => {

            dispatch(action);
        }, 1000);
    };
}


store.dispatch(asyncAction('baobao'))



