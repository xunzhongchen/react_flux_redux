


const Dispatcher=require('./Dispatcher-5');

const webAPI=require('./webAPI-5')

class Actions{

    add(name){
        var action={
            actionType:'add',
            name
        }
        Dispatcher.dispatch(action);
    }

    del(index){
        var action={
            actionType:'del',
            index
        }
        Dispatcher.dispatch(action);
    }

    add(name){

        var action={};
        Dispatcher.dispatch(action)



        webAPI.add(name,function (err,data) {

            var action;
            if(!err){
                action={
                    actionType:'confirmAddSuccess',
                    data:data
                }
            }else {
                action={
                    actionType:'addError',
                    data:data
                }
            }
            Dispatcher.dispatch(action);
        })


    }

    getAll(){

        //server
        webAPI.getAll(function (data) {
            var action={
                actionType:'getAll',
                list:data
            }

            Dispatcher.dispatch(action);

        });
    }
}

module.exports=Actions;