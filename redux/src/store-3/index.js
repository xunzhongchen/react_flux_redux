
const Store=require('./Store');


exports.createStore=function createStore(updaters,defaultState) {

    const sto=new Store(defaultState)

    sto.setUptates(updaters)

    return sto;

}


exports.useMiddleWare=function useMiddleWare(store,middles) {
    middles.reverse();

    middles.forEach(middle=>{

        let next= store.dispatch;

        //middle(store);

        store.dispatch=middle(store)(next.bind(store));
    })
    return store;
}