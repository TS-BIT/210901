function Preke(props) {

    return (
        <div className="product">
            <div className="cat">{props.cat}</div>
            {/* <img src={props.data.img}/> */}
            <div className="id">{props.data.id}</div>
            <div className="title">{props.data.title}</div>
            {/* <div className="author">{props.data.author}</div>
            <div className="price">{props.data.price}</div> */}
        </div>
    );
}

export default Preke;