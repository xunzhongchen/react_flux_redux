const React=require('react');
const ReactDOM=require('react-dom');
const TreeNode=require('./TreeNode');

const Node=require('tree-node')

var root=new Node();


var n1=new Node();
var n2=new Node();

n1.data('title','one');
n2.data('title','two');



root.appendChild(n1).appendChild(n2)


var n3=new Node();
n3.data('title','three');
var n4=new Node();
n4.data('title','four');

n2.appendChild(n3).appendChild(n4)


let div=document.createElement('div');
document.body.appendChild(div)

ReactDOM.render(<TreeNode node={root}/>,div)