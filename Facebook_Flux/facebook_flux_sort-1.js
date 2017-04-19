

var Dispatcher=require('flux').Dispatcher;

var  dispatcher=new Dispatcher();




dispatcher.register(function () {
    console.log('callback one');
})

dispatcher.register(function () {
    console.log('callback two');
})

dispatcher.register(function () {
    console.log('callback three');
})


dispatcher.dispatch()

/*
    执行结构
        callback one
        callback two
        callback three

*/



