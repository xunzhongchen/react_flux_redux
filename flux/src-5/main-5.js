const React=require('react');

const ReactDOM=require('react-dom');

const List=require('./List-5');

const Dispatcher=require('./Dispatcher-5');



Dispatcher.
    use(function log(action,next) {

        console.log('---log---',action.actionType);
        next();


    }).use(function bzd(action,next) {

        setTimeout(function () {
            console.log('---bzd---',action.actionType);
            next();
        },500)
    })

ReactDOM.render(<List />,document.body)



