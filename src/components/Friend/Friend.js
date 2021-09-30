import React from 'react';
import { Link ,useHistory } from 'react-router-dom';
import './Friend.css';
const Friend = (props) => {
    const {name, phone, website, address,id} =props.friend;

    // useHistory hook
const history = useHistory();
    // dynamic url
    const url = `/friend/${id}`;

    // event handler
    const handleFriendClick = () =>{
        //    history.push(url);
        history.push(`/friend/${id}`);
    }
    return (
        <div className = "friend">
            <h2>I am  {name}</h2>
            <h3>My contact no. {phone}</h3>
            <h4>Visit my website {website}</h4> 
            <h4>Address : {address.city}, {address.street} </h4>
            <Link to={url}>Visit me </Link>
            <br />
            <Link to={url}> <button>Visit Me</button> </Link>
        <br />
        <button onClick = {handleFriendClick}>Go to </button>
        </div>
    );
};

export default Friend;