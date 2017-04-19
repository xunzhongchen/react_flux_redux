

var Dispatcher=require('flux').Dispatcher;

var  dispatcher=new Dispatcher();


var store1,store2,store3;

store1=dispatcher.register(function () {
    console.log('callback one');
})

store2=dispatcher.register(function () {
    dispatcher.waitFor([store1,store3])//等待 第一个注册store1 和第三个注册store3  执行结束  再执行自己
    console.log('callback two');
})

store3=dispatcher.register(function () {
    console.log('callback three');
})


dispatcher.dispatch()



/*

    执行结构
        callback one
        callback three
        callback two


    循环等待
*/

