
const Reflux=require('reflux')

const action=Reflux.createAction();

action.listen(data=>console.log('listener 1 , data is ', data));

action.listen(data=>console.log('listener 2, data is ', data));

action.trigger('leo');