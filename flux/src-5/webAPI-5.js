
module.exports={
    getAll(callback){
        setTimeout(function () {
            callback(['aaaa','bbbb','ccccc'])
        },2000);
    }
}

