const Reflux=require('reflux');


/*const actions=Reflux.createActions(['action1','action2']);*/

const actions=Reflux.createActions({
    action1:{},
    action2:{asyncResult:true}
});



actions.action1.listen(data=>{console.log('action1 listener');});

actions.action2.listen(data=>{console.log('action2 listener');});


actions.action1();
actions.action2();

