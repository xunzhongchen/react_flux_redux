const Dispatcher=require('./Dispatcher-4');

class Actions{



   add(name){
       var action={
           actionType:'add',
           name
       }

       Dispatcher.dispatch(action);
   }

   del(index){
       var action={
           actionType:'del',
           index
       }
       Dispatcher.dispatch(action);
   }

}

module.exports=Actions;