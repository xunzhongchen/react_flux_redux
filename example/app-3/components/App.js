
const React=require('react');
const ReactDOM=require('react-dom');
const redux=require('redux');
const {connect,Provider}=require('react-redux');
const thunk=require('redux-thunk').default;

const {Grid,Row,Col }=require('react-bootstrap');
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
        return {list:[],loginError:null,logined:false}
    }

    switch (action.type){
        case 'init':
            var list= state.list.concat(action.payload.list);
            return Object.assign({},state,{list});


        case 'add':
            var list= state.list.concat(action.payload.value);
            return Object.assign({},state,{list});

        case 'logined':
            if(action.error){
                return Object.assign({},state,{logined:false,loginError:action.payload});
            }else {
                return Object.assign({},state,{logined:true,loginError:null});
            }
        case 'logout':
            return Object.assign({},state,{logined:false,loginError:null});

        default:
            return state;
    }
}

const store=redux.createStore(reducer,{list:[]},redux.applyMiddleware(thunk));

const actions={
    init(){
        return function (dispatch) {

            //es7 API 代替 ajax
            /*fetch('../data/data.json').then(function (res) {
                res.json().then(data=>{
                   console.log(2)
                    dispatch({
                        type:'init',
                        payload:data
                    })
                })
            })*/


            var payload={
                'list':[
                    {'title':'chen','body':'chen xun zhong'},
                    {'title':'cai','body':'cai bao ling'},
                    {'title':'liu',body:'liu yi fei'}
                ]
            }

            setTimeout(function () {
                dispatch({
                    type:'init',
                    payload:payload
                })
            },1000)

        }
    },

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

    },
    logout(){
        return {
            type:'logout'
        }
    }
}


let App=React.createClass({

    componentDidMount(){
        this.props.init();
    },


    render(){
        return (<div>
            {Navbar}
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={8}> <List list={this.props.list}/></Col>
                    <Col xs={6} md={4}>
                        {this.props.logined? (<div>登入成功<button onClick={this.props.logout}>退出</button></div>): (<Login loginError={this.props.loginError} login={this.props.login}/>)}
                    </Col>
                </Row>
            </Grid>
            <Editor submit={this.props.submit}/>
        </div>)
    }
});

App=connect(state=>store.getState(),actions)(App);


ReactDOM.render(<Provider store={store}><App/></Provider>,document.getElementById('div'));