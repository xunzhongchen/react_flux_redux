const EventEmitter=require('events').EventEmitter;



class Store extends EventEmitter{
    constructor(action){


        //命令是否处理 store 决定
        action.on('create', (action)=>{

            switch (action.actionType){
                case 'add':
                    this._add(action.name)
                    break;
                case 'del':
                    this._del(action.index)
                    break;

            }
        })

        super();
        this._list=['勋钟'];
    }


    //主要任务  根据不同的action 去更改数据  抛出change事件  让List监听



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
module.exports=Store