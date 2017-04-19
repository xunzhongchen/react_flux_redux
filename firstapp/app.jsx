



ReactDOM.render(
    <div>
        <button className="btn btn-default">Add</button>
        <ul className="list-group">
            <li className="list-group-item">
                Cras justo odio
                <a className="right glyphicon glyphicon-edit" href="#"></a>
                <a href="#" className="right glyphicon glyphicon-remove"></a>
            </li>
            <li className="list-group-item">
                <input class="item-edit"/>
                <a className="glyphicon glyphicon-share" href="#"></a>
                <a href="#" className=" glyphicon glyphicon-remove"></a>
            </li>
        </ul>
    </div>,
    document.getElementById('container')
);