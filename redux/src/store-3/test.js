
const createStore=require('./index').createStore;
const useMiddleWare=require('./index').useMiddleWare;


//es6 
const logger=store=>next=>action=>{

    console.log('Action begin',action.type);
    next.call(store,action)
    console.log('Action end',action.type);

}

//es5
/*const logger=function (store) {

    return function (next) {
        return function (action) {
            console.log('Action begin',action.type);
            next.call(store,action)
            console.log('Action end',action.type);
        }
        
    }
    
}*/


const store=createStore(function (state,action) {
    if(action.type==='changeName'){
        return {
            name:action.name
        }
    }else {
        return state;
    }
},{name:'leo'})


useMiddleWare(store,[logger])


store.listen(()=>{
    console.log(store.state);
})


store.dispatch({
    type:'changeName',
    name:'xunzhong'
})


