
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

    var promiseAction=new Promise(function (resolve,reject) {
        setTimeout(function () {
            var action={
                type:'test',
                name:'leo'
            }
            resolve(action);
        },1000)
    })


    promiseAction.then(function (action) {
        store.dispatch(action)
    })
    

}


callAtion(store)



const action={
    type:'changeName',
    name:'xunzhong'
}
store.dispatch(action)