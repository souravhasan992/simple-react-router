import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import './Post.css'
const Post = (props) => {
    const {title, body, id} =props.post;
    const history = useHistory();
    const handlePostDetail=()=>{
        history.push(`/post/${id}`)
    }
    return (
        <div className='single-post'>
            <h2>{title}</h2>
            {/* <p>{body}</p> */}
            {/* <Link to={`/post/${id}`}>Post Detail</Link> */}
            <button onClick={handlePostDetail}>Post Detail</button>

        </div>
    );
};

export default Post;