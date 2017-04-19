
const React=require('react');
const ReactDOM=require('react-dom');
const {FormGroup,ControlLabel,FormControl,Button}=require('react-bootstrap')


const Login=React.createClass({

    login(){
        const loginnameDOM=ReactDOM.findDOMNode(this.refs.loginname);
        const passwordDOM=ReactDOM.findDOMNode(this.refs.password);

        this.props.login({loginname:loginnameDOM.value,password:passwordDOM.value});

        loginnameDOM.value='';
        passwordDOM.value='';

    },

    render(){
        return (<div>
            <form>
                <FormGroup controlId="formControlsText">
                    <ControlLabel>登入名称</ControlLabel>
                    <FormControl type="text" ref="loginname"/>
                </FormGroup>

                <FormGroup controlId="formControlsText">
                    <ControlLabel>登入密码</ControlLabel>
                    <FormControl   ref="password"  type="password"/>
                </FormGroup>
                <div>
                    <Button onClick={this.login}>登入</Button>
                </div>
            </form>
        </div>);
    }
})

module.exports=Login;