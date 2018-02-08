import React from 'react';
// import { withRouter } from 'react-router-dom';
// witRouter is a HOC to get the match router properties in our props

import './Post.css';

const post = (props) => (
    <article className="Post" onClick={props.clicked}>
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
    </article>
)

export default post; 
// export default withRouter(post); 