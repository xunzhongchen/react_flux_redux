
let state={
    aaa:{name:'leo'},
    bbb:{group:'javascript'},
    ccc:{age:123}
}


function update(updaters,state) {

    let newState={};

    const  keys=Object.keys(updaters);

    keys.forEach(key=>{
        let updater= updaters[key];
        let value=state[key];
        let newSubstate=updater(value);

        newState[key]=newSubstate;

    });
    newState=Object.assign({},state,newState)

    console.log(newState)
}


function aaaUpdater(subState) {//subState  是 state数据的一部分
    return {
        name:'xun'
    }
}


function bbbUpdater(subState) {
    return {
        group:'nodejs'
    }
}

update({
    aaa:aaaUpdater,
    bbb:bbbUpdater

},state)



