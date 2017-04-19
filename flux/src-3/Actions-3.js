
const EventEmitter=require('events').EventEmitter;


class Actions extends EventEmitter{
    constructor(){
        super();
    }

    //主要任务：通过action生成器 内部 生成 统一的 actions对象   抛出 事件 让 store监听

   add(name){ //actions  生成器
       var action={
           actionType:'add',
           name
       }

       this.emit('create',action)
   }

   del(index){
       var action={
           actionType:'del',
           index
       }
       this.emit('create',action)
   }

}

module.exports=Actions;