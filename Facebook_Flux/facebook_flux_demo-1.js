
const React=require('react');
const ReactDOM=require('react-dom');

const Dispatcher=require('flux').Dispatcher;

const dispatcher=new Dispatcher;
const Store=require('flux/utils').Store;


class ListStore  extends  Store{
    constructor(dispatcher){
        super(dispatcher);
        this.state=[]
    }

    __onDispatch(action){
        switch (action.type){
            case 'add':
                this.__changed=true;
                this.state.push(action.item);
                break;
        }
    }
}


let store=new ListStore(dispatcher);

class Container extends React.Component{

    constructor(props){
        super(props);
        this.state={
            list:[]
        }
    }
    componentDidMount(){
        //返回一个函数  执行这个函数  清除监听
        this.remove=store.addListener(()=>{
            this.setState({
                list:store.state
            })
        })
    }
    componentWillUnmount(){
        //当组件 卸载时  清除监听
        this.remove()
    }


    click(){
        let value=this.refs.input.value;

        dispatcher.dispatch({
            type:'add',
            item:value
        })
    }

    render(){
        let list=this.state.list.map((item,index)=> <li key={index}>{item}</li>);
        return (<ul>
            <input type="text" ref="input"/>
            <li><button onClick={this.click.bind(this)}>add</button></li>
            {list}
        </ul>)
    }
}

ReactDOM.render(<Container />,document.body)