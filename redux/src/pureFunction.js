
//纯函数  直接返回原来状态对象
function pureFunction(state){

    return state;
}




const newState=pureFunction({num:2})

console.log(newState)