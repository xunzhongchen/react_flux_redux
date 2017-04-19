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



function createActions(actions,dispatch) {
    function createAction(action,dispatch) {

        return function (opt) {
            action=Object.assign({},action,opt,{type:action.type})
            dispatch(action)
        }
    }


   if(typeof  actions==='function'){
        return createAction(actions(),dispatch)
   }else {
       let result={};
       for(var k in actions){
           result[k]=createAction(actions[k],dispatch)
       }
       return result;

   }
}

let a={type:'changeName'}

let b={type:'b'}

let c={type:'c'}

let actions=createActions({a,b,c},store.dispatch)


actions.a({name:'123'});
actions.b();
actions.c();



