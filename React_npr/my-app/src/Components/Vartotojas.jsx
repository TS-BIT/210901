import axios from 'axios';
import React, {useState, useEffect} from 'react';

function Vartotojas(props) {

    const [name, setName] = useState('');

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users/'+props.id)
        .then(r => setName(r.data.name));
        }, [props.id]);

    return (
       <div className="user">{name}</div>
    )

}


export default Vartotojas;