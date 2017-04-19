function createStore() {
    let myname='leo';
    function dispatch(){
        console.log(myname)
    }

    return {
        dispatch:dispatch
    }

}

store.createStore();

store.dispatch();

var dispatch=store.dispatch;

dispatch();
