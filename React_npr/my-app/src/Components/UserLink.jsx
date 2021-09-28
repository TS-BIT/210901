import { Link } from "react-router-dom";
import User from './User';
import Todo from './Todo';

function UserLink(props) {
    return (
        <li><Link to={'' + props.user.id}>{props.user.name}</Link></li>
    )

    const {id} = useParams();
    return (
        <h1 style={{fontSize: '123px'}}>{list[id-1].name}</h1>
    )
}
export default UserLink;