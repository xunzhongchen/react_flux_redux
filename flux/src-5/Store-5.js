const EventEmitter=require('events').EventEmitter;
const Dispatcher=require('./Dispatcher-5');




class Store extends EventEmitter{
    constructor(){

        super();
        this._list=[];

        Dispatcher.register((action)=>{
            switch (action.actionType){
                case 'add':
                    this._add(action.name)
                    break;

                case 'getAll':
                    this._getAll(action.list)
                    break;
                case 'del':
                    this._del(action.index)
                    break;
            }
        })
    }

    _add(item){
        this._list.push(item);

        this.emit('change',this._list);
    }

    _getAll(dataArr){
        this._list=dataArr;
        this.emit('change',this._list);
    }

    _del(index){
        this._list.splice(index,1)

        this.emit('change',this.list);
    }


    get list(){
        return this._list;
    }
}
module.exports=Store