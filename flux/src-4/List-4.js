const React=require('react');

const Store=require('./Store-4');
const Actions=require('./Actions-4')


const actions=new Actions();

const store=new Store();


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

        actions.add(this.refs.nameInput.value);
        this.refs.nameInput.value=''


    }

    del(index){
        actions.del(index)

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
                        return (<li key={index}  onClick={this.del.bind(this,index)}>{item}</li>)
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