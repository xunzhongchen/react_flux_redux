const EventEmitter=require('events').EventEmitter;

const Dispatcher=require('./Dispatcher-4');



class Store extends EventEmitter{
    constructor(){
        super();

        this._list=['勋钟'];


        Dispatcher.register((action)=>{


            switch (action.actionType){
                case 'add':
                    this._add(action.name)
                    break;
                case 'del':
                    this._del(action.index)
                    break;
            }

        })

        //命令是否处理 由store 决定
    }

    _add(item){
        this._list.push(item);

        this.emit('change',this.list);//抛出change事件
    }

    _del(index){
        this._list.splice(index,1)

        this.emit('change',this.list);
    }

    get list(){
        return this._list;
    }
}
module.exports=Store;


