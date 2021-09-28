import { useParams } from "react-router-dom";
import User from './User';
import Todo from './Todo';
import UserLink from './UserLink';

function OneUser() {
    const {id} = useParams();
    return (
        <h1 style={{fontSize: '123px'}}>{props.user.id, props.user.name}</h1>
    )
}
export default OneUser;