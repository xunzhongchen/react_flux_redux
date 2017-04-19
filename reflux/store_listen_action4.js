
const Reflux=require('reflux');

const actions=Reflux.createAtions({
    action1:{
        asyncResult:true
    },
    action2:{
        asyncResult:true
    }

});

const store=Reflux.createStore({

    init(){},

    listenables:actions,


    action1(){//onAction1
        console.log('action')
    },

    onAction1Completed(){
        console.log('action1 completed')
    },


    action2(){//onAction2
        console.log('action')
    },
})

actions.action1();