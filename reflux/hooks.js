const Reflux=require('reflux');


const action=Reflux.createAction({
    preEmit(data){
        return 'leo'
    },

    shouldEmit(){
        return true;
    }
});


action.listen(data=>console.log(data));

action('xun')
