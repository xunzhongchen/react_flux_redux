


'use  strict'
var Dispatcher=require('flux').Dispatcher;

var  dispatcher=new Dispatcher();

const Store=require('flux/utils').Store;




class MyStore extends Store{
    constructor(dispatcher){
        super(dispatcher);

        this.data='';//给定一个数据体

    }
    __onDispatch(action){
        this.__changed=true;
        switch (action.type){
            case 'update':
                this.data+=action.data;
                break;
        }
    }
}

var my_store=new MyStore(dispatcher);
var my_store2=new MyStore(dispatcher);


//ui  调用
my_store.addListener(function callback(args) {
    console.log('args=',args);//undefined
    console.log('data=>',my_store.data)
})


my_store2.addListener(function callback(args) {
    console.log('data=>',my_store.data)
})


//ui-> click-> action
dispatcher.dispatch({
    type:'update',
    data:'leo'
})

