
const Redux=require('redux');
const createStore=Redux.createStore;

//const combineReducers=Redux.combineReducers;

function combineReducers(reducers) {//combineReducers  基本原理代码

    return function reducer(state,action) {
        let newState={}

        for(let key in reducers){
            newState[key]=reducers[key](state[key],action)
        }

        return newState;
    }
}



//state -> {a:[],b:[],c:{name:string,group:[]}}

//action A  B {type:String,data:String}
//action    C{type;String,name:String,item}

/*const reducers={
    a:function (state,action) {

    },
    b:function (state,action) {

    }
}*/


function aReducer(state,action) {
    if(typeof state==='undefined'){
        return [];
    }


    switch(action.type){
        case 'a':

            //return state.push(action.data);
            //return state;

            return state.concat([action.data]);
        default:
            return state;
    }
}

function bReducer(state,action) {
    if(typeof state==='undefined'){
        return [];
    }


    switch(action.type){
        case 'b':

            //return state.push(action.data);
            //return state;

            return state.concat([action.data]);
        default:
            return state;
    }
}

function cReducer(state,action) {
    if(typeof state==='undefined'){
        return {name:'',group:[]};
    }


    switch(action.type){
        case 'c':
            //可在此处 变更action 服务于c内部
            return combineReducers({name:cNameReducer,group:cGroupReducer})(state,action)
        default:
            return state;
    }
}

function cNameReducer(state,action) {
    if(typeof state==='undefined'){
        return '';
    }


    if(action.type==='c'){
        return action.name

    }else {
        return state
    }
}

function cGroupReducer(state,action) {
    if(typeof state==='undefined'){
        return [];
    }

    if(action.type==='c'){
        return state.concat(action.item)
    }else {
        return state;
    }

}




const reducer=combineReducers({a:aReducer,b:bReducer,c:cReducer})


const store=createStore(reducer,{a:['111'],b:['222'],c:{name:'333',group:['444']}});


store.subscribe(()=>{console.log(store.getState())});


let actionA={
    type:'a',
    data:'xunzhong'
}

let actionB={
    type:'b',
    data:'lingdang'
}

let actionC={
    type:'c',
    name:'baobao',
    item:'lingdang'
}




store.dispatch(actionA)
store.dispatch(actionB)
store.dispatch(actionC)