const Reflux=require('reflux');

const action=Reflux.createAtion();

const store=Reflux.createStore({

    data:{num:0},

    init(){
        this.listenTo(action,this.onClick)
    },

    onClick(){
        ++this.data.num;

        this.trigger(this.data)
    }
})




store.listen(function (state) {
    console.log(state)
});


action();