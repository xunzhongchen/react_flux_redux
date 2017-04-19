


//纯函数  如果状态有更改  则 重新创建状态对象 并返回
function pureFunction(state){
    let num=++state.num;

    return {
        num
    };
}



const newState=pureFunction({num:2})


console.log(newState)