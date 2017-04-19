const redux=require('redux');
const promise=require('redux-promise')

// import thunk from 'redux-thunk';



//let createStore= redux.applyMiddleware(thunk)(redux.createStore);//写法过时了
function reducer(state,action) {
    if(typeof state==='undefined'){
        return {}
    }

    switch (action.type){
        case 'changeName':
            return {
                payload:{
                    name:action.payload.name
                }
            }

        default :
            return state;
    }
}

// const store=redux.createStore(reducer,redux.applyMiddleware(thunk));

const store=redux.createStore(reducer,redux.applyMiddleware(promise));




store.subscribe(()=>{
    console.log(store.getState())
})


function action(name) {
    return {
        payload:{name},type:'changeName'
    }
}


let asyncAction=function(name) {

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(action(name));
        },1000)
    })

}


store.dispatch(asyncAction('baobao'))



