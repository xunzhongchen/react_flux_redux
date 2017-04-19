const Reflux=require('reflux');

/*const action=Reflux.reacteAtion({
    children:['completed','failed']
});*/

//const action=Reflux.reacteAtion({asyncResult:true});  //内部默认  children:['completed','failed']

const action=Reflux.reacteAtion({
    asyncResult:true,
    children:['clickMe']
});



action.completed.listen(function () {
    console.log('complted')
})


action.failed.listen(function () {
    console.log('failed')
})

action.clickMe.listen(function () {
    console.log('clickMe');

    setTimeout(()=>{
        this.completed()
    })

}.bind(action))


action.listen(function (data) {
    console.log('listen');

    setTimeout(function () {


        this.clickMe();
    }.bind(this),2000)
});

action.trigger()