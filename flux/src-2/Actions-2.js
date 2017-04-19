
const store=Symbol('store')

class Actions{


   constructor(_store){
       this[store]=_store;
   }

   add(name){
       this[store]._add(name)//不应该直接调用  静态方法
   }

}

module.exports=Actions;