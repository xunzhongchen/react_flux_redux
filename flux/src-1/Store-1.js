const EventEmitter=require('events').EventEmitter;




class Store extends EventEmitter{
    constructor(){
        super();
        this._list=[];
    }

    _add(item){
        this._list.push(item);

        this.emit('change',this.list);//抛出change事件
    }

    get list(){
        return this._list;
    }
}
module.exports=Store