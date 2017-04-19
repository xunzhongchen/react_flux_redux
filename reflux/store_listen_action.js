
const Reflux=require('reflux');

const actions=Reflux.createAtions(['action1','action2']);

const store=Reflux.createStore({
    init(){


        this.listenTo(actions.action1,this.onAction)
        this.listenTo(actions.action2,this.onAction)

    },
    onAction(){
        console.log('action')
    },

})

actions.action1();