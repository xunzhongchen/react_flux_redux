
const Redux=require('redux');

const reducer=function (state,action) {//形参绑定  同步返回
    if(action.type==='changeName'){
        //return newState=JSON.parse(JSON.stringify(state))
        return Object.assign({},state,{name:action.name})
    }else {
        return state;
    }
};

const store=Redux.createStore(reducer,{name:'leo'});


var { subscribe,dispatch,getState}=store;



subscribe(
    ()=>{console.log(getState())}
);


const action={
    type:'changeName',
    name:'xunzhong'
}
dispatch(action)