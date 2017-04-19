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



function createAction(action,dispatch) {
    return function (opt) {
        action=Object.assign({},action,opt,{type:action.type})
        dispatch(action)
    }
}

var action =createAction({type:'changeName',name:'leo'},store.dispatch)



action({name:'xun'})