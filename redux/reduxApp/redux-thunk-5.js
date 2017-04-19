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


function action(name) {
    return {
        name,type:'changeName'
    }
}


let asyncAction=function() {


    return dispatch=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                dispatch(action('action1'));
                resolve();
            },1000)
        }).then(function () {

            return new Promise((resolve)=>{
                setTimeout(function () {
                    dispatch(action('action2'));
                    resolve();
                },1000)
            })


        }).then(function () {
            dispatch(action('action3'));
        })
    }


}


store.dispatch(asyncAction('baobao'))



