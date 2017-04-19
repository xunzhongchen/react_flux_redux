const React=require('react');

const Store=require('./Store-2');
const Actions=require('./Actions-2')

const store=new Store();
const actions=new Actions(store);



//top level component ,container and controller-view   类似 angular controller
class List  extends React.Component{
    constructor(props){
        super(props);
        this.state={
            list:store.list//体验数据的提供者是  store
        }

         /*this.state={
            list:[]
         }*/

    }

    add(){
        //伪代码
        //store._add(this.refs.nameInput.value);


        actions.add(this.refs.nameInput.value);
        // -> dispacher ->store

    }

    componentDidMount(){

        store.on('change',list=>{
            this.setState({
                list
            })
        })
    }

    render(){
        return (
            <ul>
                {
                    this.state.list.map((item,index)=>{
                        return (<li key={index}>{item}</li>)
                    })
                }
                <li>
                    <input  ref="nameInput"/>
                    <button onClick={this.add.bind(this)}>click me</button>
                </li>
            </ul>
        )
    }
}

module.exports=List;