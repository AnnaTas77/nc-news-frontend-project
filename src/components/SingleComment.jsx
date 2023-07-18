import React from "react";

function SingleComment({ comment }) {
    const dateString = comment.created_at;
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const formattedDate = `${day}/${month}/${year}`;

    return (
        <div className="single-comment-card">
            <p className="comment-author-date">
                Posted by <span>{comment.author}</span> on <span>{formattedDate}</span>
            </p>
            <p className="comment-text">{comment.body}</p>

            <p className="comment-votes">
                <span>{comment.votes}</span> Votes
            </p>
        </div>
    );
}

export default SingleComment;
