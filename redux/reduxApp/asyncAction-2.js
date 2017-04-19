const Redux=require('redux');

const applyMiddleware=Redux.applyMiddleware;



const logger=store=>nextDispatch=>action=>{
    console.log('start');

    let result=nextDispatch(action);

    console.log('end');

    return result;
}


const generator=store=>nextDispatch=>action=>{

    if(typeof action==='function'&& action.constructor.name==='GeneratorFunction'){

        let g=action();
        let v=g.next();//v  {done:true,value:Promise}


        function run(v) {
            if(v.done){
                nextDispatch(v.value)
            }else {
                if(v.value && v.value instanceof Promise){
                    v.value.then(function (name) {//leo
                        run(g.next(name))
                    })
                }else {
                    nextDispatch(v.value)
                }
            }
        }
        run(v)
    }
}


const createStore=applyMiddleware(generator,logger)(Redux.createStore);


const reducer=function (state,action) {
    if(typeof state ==='undefined'){return {name:''}}
    switch (action.type){
        case 'changeName':
            return {name:action.name}
        default:
            return state;
    }
}

const store=createStore(reducer,{nme:'leo'});

store.subscribe(()=>{
    console.log(store.getState())
})


function *generatorAction() {
    let name=yield new Promise(function (resolve,reject) {
        setTimeout(function () {
            resolve('leo')
        },3000)
    })
    return {
        name,
        type:'changeName'
    }
}



store.dispatch(generatorAction)


console.log('first')


