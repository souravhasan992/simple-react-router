import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const FriendDetail = () => {
    const {friendId} = useParams();
    const [friend , setFriend] = useState({})
    useEffect(()=>{
        const url =`https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch (url)
        .then(res => res.json())
        .then(data =>setFriend(data))
    },[])
const {name, phone, website, company}= friend;
const history = useHistory();
const handleAllFriend=()=>{
    history.push(`/friends`)
}

    return (
        <div>
            <h3>Friend Detail of: {friendId}</h3>
            <h1>{name}</h1>
            <h2>{phone}</h2>
            <h4>{website}</h4>
            <p>Works at: {company?.name} </p>
            <button onClick={handleAllFriend}>See All Friends</button>
        </div>
    );
};

export default FriendDetail;