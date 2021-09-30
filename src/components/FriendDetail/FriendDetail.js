import React ,{useEffect ,useState} from 'react';
import {useHistory, useParams} from 'react-router';

const FriendDetail = () => {
    const {friendId} = useParams();
    // console.log(params);
    const [friend, setFriend] = useState({});

    const history = useHistory();
    useEffect(() =>{
        const url =`https://jsonplaceholder.typicode.com/users/${friendId}`;

        fetch(url)
        .then(res => res.json())
        .then(data =>setFriend(data));
    },[]);
    
     const handleBackButton =() =>{
    history.push('/friends');
}
    return (
        <div>
            <h3>Friend detail  of {friendId}</h3>
            <h4>Name  : {friend.name}</h4>
            <h5>Phone : {friend.phone}</h5>
            <h5>Email : {friend.email}</h5>
            <p>Works at : {friend.company?.name}</p>
<button onClick ={handleBackButton}>Back to Friends</button>
        </div>
    );
};

export default FriendDetail;