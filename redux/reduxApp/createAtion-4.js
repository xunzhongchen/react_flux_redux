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



store.subscribe(()=>{
    console.log(store.getState())
})


function actionA(name) {
    return {
        type:'changeName',
        name
    }
}


let actions=Redux.bindActionCreators(actionA,store.dispatch)
actions('xun')