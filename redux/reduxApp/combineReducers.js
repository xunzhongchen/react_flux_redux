
const Redux=require('redux');
const createStore=Redux.createStore;
const combineReducers=Redux.combineReducers;



//state -> {a:[],b:[]}

//action A  B {type:String,data:String}


/*const reducers={
    a:function (state,action) {

    },
    b:function (state,action) {

    }
}*/


function aReducer(state,action) {
    if(typeof state==='undefined'){
        return [];//权限比较低  会被覆盖
    }


    switch(action.type){
        case 'a':

            /*
                //错误的代码
                return state.push(action.data);
                return state;
            */

            return state.concat([action.data]);
        default:
            return state;
    }
}

function bReducer(state,action) {
    if(typeof state==='undefined'){
        return [];//权限比较低  会被覆盖
    }


    switch(action.type){
        case 'b':

            return state.concat([action.data]);
        default:
            return state;
    }
}




const reducer=combineReducers({a:aReducer,b:bReducer})
const store=createStore(reducer,{a:['111'],b:['222']});

store.subscribe(()=>{console.log(store.getState())});

const actionA={
    type:'a',
    data:'xunzhong'
}

const actionB={
    type:'b',
    data:'lingdang'
}
store.dispatch(actionA)
store.dispatch(actionB)