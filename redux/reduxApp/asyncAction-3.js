const Redux=require('redux');

const applyMiddleware=Redux.applyMiddleware;



const logger=store=>nextDispatch=>action=>{
    console.log('start');

    let result=nextDispatch(action);

    console.log('end');

    return result;
}

const thunk=store=>nextDispatch=>action=>{

    if(typeof action==='function'){
        action(nextDispatch)
    }else {
        nextDispatch(action)
    }
}

const promise=store=>nextDispatch=>action=>{

    if(action instanceof Promise){

        action.then(function (action) {
            nextDispatch(action)
        })
    }else {
        nextDispatch(action)
    }
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


const asyncMiddleWare=store=>nextDispatch=>action=>{
    if(typeof action==='function'){

        if(action.constructor.name==='GeneratorFunction'){
            let g=action();
            let v=g.next();//v  {done:true,value:Promise}
            run(v)
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
        }else {
            action(nextDispatch)
        }

    }else if(action instanceof Promise){
        action.then(function (action) {
            nextDispatch(action)
        })
    }else {
        nextDispatch(action)
    }

}


const createStore=applyMiddleware(asyncMiddleWare,logger)(Redux.createStore);


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




function thunkAtion(name) {
    return dispatch=>{
        setTimeout(function () {
            dispatch({type:'changeName', name})
        },1000)
    }
}


function promiseAtion(name) {
    return new Promise((resolve,reject)=>{
        /* resolve({
         type:'changeName',
         name
         })*/

        setTimeout(function () {
            resolve({
                type:'changeName',
                name
            })
        },2000)
    })
}


/*function *generatorAction() {
    let name=yield new Promise(function (resolve,reject) {
        setTimeout(function () {
            resolve('leo')
        },3000)
    })
    return {
        name,
        type:'changeName'
    }
}*/


function gAction(nameArg) {
    return function *generatorAction() {
        let name=yield new Promise(function (resolve,reject) {
            setTimeout(function () {
                resolve(nameArg)
            },3000)
        })
        return {
            name,
            type:'changeName'
        }
    }

}


store.dispatch(thunkAtion('chen'))
store.dispatch(promiseAtion('xun'))
store.dispatch(gAction('zhong'))


console.log('first')


