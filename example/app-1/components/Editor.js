
const React=require('react');
const ReactDOM=require('react-dom')
const {FormGroup,ControlLabel,FormControl,Button}=require('react-bootstrap')

// props submit/function
const Editor=React.createClass({


    submit(){

        let bodyDOM=ReactDOM.findDOMNode(this.refs.body);

        this.props.submit(bodyDOM.value)


        bodyDOM.value='';

    },


    render(){
        return (<form>
            <FormGroup controlId="formControlsText">
                <ControlLabel>内容</ControlLabel>
                <FormControl componentClass="textarea"  ref="body"/>
            </FormGroup>
            <div>
                <Button onClick={this.submit}>添加</Button>
            </div>
        </form>)
    }
})
module.exports=Editor;

