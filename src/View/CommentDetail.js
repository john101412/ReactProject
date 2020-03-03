import React from 'react';
import faker from 'faker';

 const CommentDetail=()=>{
    return(
        <div className="ui container comments">
        <div className="comment">
          <a href="/">
            <img alt="avatar" src={faker.image.avatar()}/>
          </a>
          <div className="content">
            <a href="/" className="author">
              Sam
            </a>
            <div className="metadata">
              <span className="date">Today at 6:00pm</span>
            </div>
            <div className="tex">Nice Blog Post</div>
          </div>
        </div>
        </div>
      
  
    );
}
export default CommentDetail;
