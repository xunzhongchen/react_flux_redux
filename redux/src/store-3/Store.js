
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

module.exports=Store