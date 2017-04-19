const React=require('react');

const ReactDOM=require('react-dom');

const List=require('./List-4');

const Dispatcher=require('./Dispatcher-4');



Dispatcher.
     use(function log(action,next) {

         setTimeout(function () {
             console.log('---log---',action.actionType);
             next();
         },2000)


     }).use(function bzd(action,next) {

         setTimeout(function () {
             console.log('---bzd---',action.actionType);
             next();
         },2000)

     })



ReactDOM.render(<List />,document.body)



