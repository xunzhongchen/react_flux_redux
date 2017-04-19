

const storeCallbackList=[];
const middleWareList=[];

/*

    通过Dispatcher 解耦 Actions 和 Store
    为什么加入 调度器 Dispatcher

    把每一次创建的actions 加入到 调度器  类似事件总线概念


    在其内部注册一个或多个 store

    调度器没接受一个actions 就把actions 动作分发给 所有的store  至少有一个store

    这个过程 可以加入  中间件（记录器 日志等功能）
*/


module.exports={

    use(middleWare){
        middleWareList.push(middleWare);

        return this;
    },


    //注册
    register(storeCallback){
        storeCallbackList.push(storeCallback)
    },


    //调度
    dispatch(action){
        let index=-1;

        let that=this;
        function next() {
            const middle=middleWareList[++index];
            if(middle){
                middle(action,next)
            }else {
                that._dispatch(action)
            }
        }
        next();
    },


    _dispatch(action){
        for(let callback of storeCallbackList){
            callback(action);
        }
    }

}