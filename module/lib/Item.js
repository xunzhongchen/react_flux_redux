
const React=require('react')

//Item
const Item=React.createClass({

    getInitialState(){
        return{
            isEditor:true
        }
    },

    editor(){
        this.setState({
            isEditor:true
        })
    },


    remove(){
        this.props.onRemove(this.props.id)
    },


    save(){

        this.props.onSave(this.props.id,this.refs.inputText.value)

        this.setState({
            isEditor:false
        })
    },

    render(){


        return this.state.isEditor?

            (<li className="list-group-item">
                {this.props.id}
                <input className="item-edit" defaultValue={this.props.value} ref="inputText"/>
                <a className="glyphicon glyphicon-share" href="#" onClick={this.save}></a>
                <a href="#" className=" glyphicon glyphicon-remove" onClick={this.remove}></a>
            </li>)

            :
            (<li className="list-group-item">
                {this.props.value}
                <a className="right glyphicon glyphicon-edit" href="#" onClick={this.editor}></a>
                <a href="#" className="right glyphicon glyphicon-remove" onClick={this.remove}></a>
            </li>)
    }
})

module.exports=Item;