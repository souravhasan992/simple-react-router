import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Friend.css'
const Friend = (props) => {
    const{id, name, phone, website, address}= props.friend;
    const history = useHistory();
    const handleFriendClick =()=>{
        history.push(`/friend/${id}`)
    }
    return (
        <div className='friend'>
            <h2>I am {name} {id}</h2>
            <h5>Call me: {phone}</h5>
            <p>Visit me:{website}</p>
            <p><small>I live in:{address.city}</small></p>
            <Link to={`/friend/${id}`}>Visit Me</Link><br />
            <Link to={`/friend/${id}`}><button>Visit Me</button></Link> <br />
            <button onClick={handleFriendClick}>Visit Me 2</button>
        </div>
    );
};

export default Friend;