
const Reflux=require('reflux');

const actions=Reflux.createAtions(['action1','action2']);

const store=Reflux.createStore({

    init(){},

    listenables:actions,


    action1(){//onAction1
        console.log('action')
    },
    action2(){//onAction2
        console.log('action')
    },

})

actions.action1();