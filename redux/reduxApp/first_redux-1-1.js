
const Redux=require('redux');

const reducer=function (state,action) {
    if(action.type==='changeName'){
        return Object.assign({},state,{name:action.name})
    }else {
        return state;
    }
};

const store=Redux.createStore(reducer,{name:'leo'});



store.subscribe(()=>{console.log(store.getState())});

function callAtion(store) {


    setTimeout(function () {
        var action={
            type:'changeName',
            name:'leo'
        }
        store.dispatch(action)
    },1000)
}


callAtion(store)


const action={
    type:'changeName',
    name:'xunzhong'
}
store.dispatch(action)