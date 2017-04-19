

const storeCallbackList=[];
const middleWareList=[];

module.exports={

    use(middleWare){
        middleWareList.push(middleWare);

        return this;
    },


    register(storeCallback){
        storeCallbackList.push(storeCallback)
    },

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