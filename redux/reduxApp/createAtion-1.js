const Redux=require('redux');

const store=Redux.createStore(function (state,action) {
    if(typeof state==='undefined'){
        return {}
    }
    switch (action.type){
        case 'changeName':
            return Object.assign({},state,{name:action.name})

        default:
            return state
    }
})

console.log(store.getState())//{}

store.subscribe(()=>{
    console.log(store.getState())
})



function actionCreate(name) {
    return {
        name,
        type:'changeName'
    }
}

store.dispatch(actionCreate('leo'))
store.dispatch(actionCreate('xunzhong'))