export default function (state,action) {
    if(typeof state==='undefined'){
        return {
            linkName:'about',
            users:[
                {name:'xun'},
                {name:'zhong'}
            ]
        }
    }

    switch (action.type){
        case 'link':
            return Object.assign({},state,{linkName:action.payload.name})

        default :
            return state;

    }

}
