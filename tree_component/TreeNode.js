
const React=require('react');

const TreeNode=React.createClass({
    render(){

        const nodeListDOM=[]

        const node=this.props.node

        for(let nodeId of node.childIds){
            let childNode=node.getNode(nodeId);
            nodeListDOM.push(<TreeNode node={childNode}/>)
        }

        return (
            <li>
                <h3>{node.data('title')}</h3>

                <ul>{nodeListDOM}</ul>

            </li>
        )
    }
})


module.exports=TreeNode;