const React=require('react');
const {ListGroup,ListGroupItem}=require('react-bootstrap');

//props {list}/array

const List=React.createClass({

    render(){
        let list=this.props.list.map((item,index)=>{
            return <ListGroupItem key={index}>{item.title}</ListGroupItem>
        })
        return (<ListGroup>
            {list}
         </ListGroup>)
    }
})
module.exports=List;




