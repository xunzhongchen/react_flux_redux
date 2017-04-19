const Reflux=require('reflux')

const action=Reflux.createAction({
    click(){
        //this.trigger('xunzhong');

        this.triggerAsync('leo');
    }
});

action.listen(data=>console.log('listener 1 , data is ', data));

action.listen(data=>console.log('listener 2, data is ', data));


action.trigger('leo');

setTimeout(()=>{
    action.trigger('leo');
})

console.log('------end-----')


action.triggerAsync('leo');



action.click();