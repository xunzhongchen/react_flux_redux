



//错误
function pureFunction(state){
    ++state.num;

    return state;
}


const newState=pureFunction({num:2})

console.log(newState)