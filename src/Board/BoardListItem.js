import React from 'react';
import { Link } from "react-router-dom";

const BoardListItem = (props) => {
    let {post} = props;
    let created = new Date(post.created);
    return (
        <Link to={`/board/${post.id}`}>
            <div className='board-list-item'>
                <div>{post.title}</div>
                <div>{post.username}</div>
                <div>
                    {created.getMonth() + 1}
                    -
                    {created.getDate()}
                    &nbsp;
                    {created.getHours()}
                    :
                    {created.getMinutes()}
                </div>
            </div>
        </Link>
    );
};

export default BoardListItem;