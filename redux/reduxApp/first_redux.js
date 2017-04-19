
const Redux=require('redux');

const reducer=function (state,action) {
    if(action.type==='changeName'){
        /*return {
            name:action.name
        }*/


        return Object.assign({},state,{name:action.name})
    }else {
        return state;
    }
};

const store=Redux.createStore(reducer,{name:'leo'});


store.subscribe(()=>{console.log(store.getState())});


const action={
    type:'changeName',
    name:'xunzhong'
}
store.dispatch(action)