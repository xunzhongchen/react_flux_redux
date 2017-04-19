
const React=require('react');
const {FormGroup,ControlLabel,FormControl,Button}=require('react-bootstrap')

// props submit/function
const Editor=React.createClass({

    getInitialState(){
        return {
            text:''
        }
    },
    submit(){
        this.props.submit(this.state.text);
    },

    handleChange(e){
        this.state.text=e.target.value;
    },
    render(){
        return (<form>
            <FormGroup controlId="formControlsTextarea">
                <ControlLabel>Textarea</ControlLabel>
                <FormControl componentClass="textarea" onChange={this.handleChange} placeholder="textarea" />
            </FormGroup>
            <div>
                <Button onClick={this.submit}>添加</Button>
            </div>
        </form>)
    }
})
module.exports=Editor;

