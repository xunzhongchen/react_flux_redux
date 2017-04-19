
const React=require('react')
const Item=require('./Item')
//List
const List=React.createClass({
    getInitialState(){
        return {
            key:0,
            list:new Map(),
        }
    },

    add(){
        const key=++this.state.key;
        this.state.list.set(key,{value:''})

        this.forceUpdate()
    },

    removeItem(id){
        this.state.list.delete(id);
        this.forceUpdate();
    },


    save(id,value){
        const key=id;
        this.state.list.set(key,{value:value})

        this.forceUpdate();

    },


    render(){
        const listDOM=[];
        for(let entity of this.state.list){
            listDOM.push(
                <Item
                    key={entity[0]}
                    id={entity[0]}
                    value={entity[1].value}
                    onRemove={this.removeItem}
                    onSave={this.save}

                />)
        }
        return (
            <div>
                <button className="btn btn-default" onClick={this.add}>Add</button>
                <ul className="list-group">
                    {listDOM}
                </ul>
            </div>
        )
    }
})
module.exports=List;