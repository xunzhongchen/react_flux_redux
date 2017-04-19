


const EventEmitter=require('events').EventEmitter;

class Store{
    constructor(state){
        this._state=state||{};
        this._updates={};

        this._emitter=new EventEmitter();
    }

    get state(){
        return JSON.parse(JSON.stringify(this._state))
    }

    // fn  function or object
    setUptates(args){
        this._updates=args;
    }

    //action
    dispatch(action){

        if(typeof this._updates==="function" ){
            this._state=this._updates(this._state,action);
        }else {

            let newState={};
            const  keys=Object.keys(this._updates);

            keys.forEach(key=>{
                let updater= this._updates[key];
                let value=this._state[key];
                let newSubstate=updater(value,action);

                newState[key]=newSubstate;

            });
            this._state=Object.assign({},this._state,newState)

        }

        this._emitter.emit('change')
    }
    //add listener
    listen(listener){
        this._emitter.on('change',listener)
    }
}
function createStore(updaters,defaultState) {

    const sto=new Store(defaultState)

    sto.setUptates(updaters)

    return sto;
}

const sto=createStore( {
    num:function numUpdater(oldNum,action) {

        switch (action.type){
            case '+':
                return ++oldNum;
                break;
            case '-':
                return --oldNum;
                break;
            default:
                return oldNum;
        }
    },
    name:function nameUpdater(oldName,action) {

        if(action.type==='changeName'){
            return action.name

        }else {
            return oldName;
        }

    }
},{num:5,name:'leo'})
sto.listen(()=>{
    console.log(sto.state);
})


function logger(store) {
    let next=store.dispatch;

    store.dispatch=function (action) {
        console.log('Action begin',action.type);
        next.call(store,action)
        console.log('Action end',action.type);
    }


    return store;
}
function ajaxData(store){

    let next=store.dispatch;

    store.dispatch=function (action) {

        if(action.url){
            setTimeout(function(){
                action.name='ajax hello'
                next.call(store,action);
            },1000)
        }else {
            next.call(store,action);
        }
    }

    return store;
}

function useMiddleWare(store,middles) {//中间件的解析器
    middles.reverse();

    middles.forEach(middle=>{
      middle(store);
    })

    return store;
}



useMiddleWare(sto,[logger,ajaxData])


sto.dispatch({
    type:'changeName',
    url:'///'
})




