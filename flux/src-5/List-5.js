const React=require('react');

const Store=require('./Store-5');

const Actions=require('./Actions-5')

const store=new Store()

const actions=new Actions();



//top level component ,container and controller-view   类似 angular controller
class List  extends React.Component{
    constructor(props){
        super(props);
        this.state={
            list:[]
        }
    }

    add(){
        actions.add(this.refs.nameInput.value);
    }


    del(index){
        actions.del(index)
    }

    componentDidMount(){
        //在组件  装载完之后 就监听store  是否发生 change 数据改变
        store.on('change',list=>{
            this.setState({
                list
            })
        })
        actions.getAll()
    }


    render(){
        return (
            <ul>
                {
                    this.state.list.map((item,index)=>{
                        return (<li onClick={this.del.bind(this,index)}  key={index}>{item}</li>)
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