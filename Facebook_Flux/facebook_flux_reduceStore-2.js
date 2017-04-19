
const React=require('react');
const ReactDOM=require('react-dom');

const Dispatcher=require('flux').Dispatcher;

const dispatcher=new Dispatcher;
const Store=require('flux/utils').Store;

const Container=require('flux/utils').Container;


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

class UI extends React.Component{

    constructor(props){
        super(props);
        this.state={
            list:[]
        }
    }

   /* componentDidMount(){
        this.remove=store.addListener(()=>{
            this.setState({
                list:store.state
            })
        })
    }

    componentWillUnmount(){
        this.remove()
    }*/


   //添加 两个静态方法

   static getStores(){
       return [store];
   }

   static calculateState(prevState){

       return {
           list:store.state
       }
   }

    click(){
        let value=this.refs.input.value;

        dispatcher.dispatch({
            type:'add',
            item:value
        })


    }

    render(){
        let list=this.state.list.map(item=> <li>{item}</li>);

        return (<ul>
            <input type="text" ref="input"/>
            <li><button onClick={this.click.bind(this)}>add</button></li>
            {list}
        </ul>)
    }
}


const ContainerUI=Container.create(UI,{pure:false})

ReactDOM.render(<ContainerUI />,document.body)