//import User from './User';


function BookList(props) {

    return (
        <div className="BookList">
            <div className='id'>{props.data.id}</div>
            {/* <User id={props.data.userId}></User>  */}
            <div className="title">{props.data.title}</div>
            <div className="status" onClick={()=>props.v(props.data.id)} style={
                {backgroundColor: props.data.completed === false ? 'red' : 'green'}
                }></div>
        </div>
    );
}

export default BookList;