
const React=require('react');
const ReactDOM=require('react-dom');
const redux=require('redux');
const {connect,Provider}=require('react-redux');

const {Grid,Row,Col,code  }=require('react-bootstrap');
const Editor=require('./Editor');
const List=require('./List');
const Navbar=require('./Navbar');
const Login=require('./Login');

/*
var state= {
    list:[],
    logined:true,
    loginError:''
}*/


function reducer(state,action) {
    if(typeof state==='undefined'){
        return {list:[]}
    }

    switch (action.type){

        case 'add':
            let list= state.list.concat(action.payload.value);
            return Object.assign({},state,{list});

        case 'logined':
            if(action.error){
                return Object.assign({},state,{logined:false,loginError:action.payload});
            }else {
                return Object.assign({},state,{logined:true,loginError:null});
            }

        default:
            return state;
    }
}

const store=redux.createStore(reducer,{list:[]});

const actions={
    submit(value){

        return {
            type:'add',
            payload:{value}
        }
    },
    login(value){
        if(value.loginname==='xunzhong'&& value.password==='123'){
            return {
                type:'logined',
                loginname:value.loginname
            }
        }else {
            return {
                type:'logined',
                payload:new Error('登入失败'),
                error:true
            }
        }

    }
}


let App=React.createClass({
    render(){
        return (<div>
            {Navbar}
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={8}> <List list={this.props.list}/></Col>
                    <Col xs={6} md={4}>
                        {this.props.logined? (<div>登入成功</div>): (<Login login={this.props.login}/>)}
                    </Col>
                </Row>
            </Grid>
            <Editor submit={this.props.submit}/>
        </div>)
    }
});

App=connect(state=>store.getState(),actions)(App);


ReactDOM.render(<Provider store={store}><App/></Provider>,document.getElementById('div'));