import React from 'react';
import { Link ,useHistory} from 'react-router-dom';

const Post = (props) => {
    const{title ,id} =props.post;

    const history = useHistory();

    const handleClickPost =() =>{
          history.push(`/post/${id}`);
    }
    return (
        <div>
           <h3>Title : {title}</h3>
           <Link to={`/post/${id}`} >Post Details</Link>
           <br />
           <button onClick = {handleClickPost}>Post Details</button>
        </div>
    );
};

export default Post;