const React=require('react');

const Store=require('./Store-3');
const Actions=require('./Actions-3')


const actions=new Actions();
const store=new Store(actions);




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

    //主要任务二 ：产生actions  调用actions的方法  调用的方式 很统一


    add(){
        //伪代码
        //store._add(this.refs.nameInput.value);


        actions.add(this.refs.nameInput.value);
        this.refs.nameInput.value=''
        // -> dispacher ->store

    }

    del(index){
        actions.del(index)

    }

    componentDidMount(){
        //主要的任务之一  监听store是否有更新   自身不对数据进行改变
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