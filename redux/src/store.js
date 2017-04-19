


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
    setUptates(fns){
        this._updates=fns;
    }

    //action
    dispatch(action){
        this._state=this._updates(this._state,action);// return newState

        this._emitter.emit('change')
    }
    //add listener
    listen(listener){
        this._emitter.on('change',listener)
    }
}

const sto=new Store({num:5})


sto.setUptates(function (oldState,action) {

    let newState={};
    switch (action.type){
        case '+':

            newState.num=++oldState.num;

            return newState;

            break;
        case '-':
            newState.num=--oldState.num;

            return newState;

            break;
        default:
            return oldState;
    }
})

sto.listen(()=>{
    console.log(sto.state);
})


const action={type:'-'};

sto.dispatch(action)
