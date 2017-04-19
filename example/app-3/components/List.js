const React=require('react');
const {PanelGroup,Panel}=require('react-bootstrap');

//props {list}/array

const List=React.createClass({


    render(){
        let list=this.props.list.map((item,index)=>{
            return <Panel header={item.title} eventKey={index} key={index}>{item.body}</Panel>
        })
        return (<PanelGroup defaultActiveKey="2" accordion>
            {list}
        </PanelGroup>)
    }
})
module.exports=List;




