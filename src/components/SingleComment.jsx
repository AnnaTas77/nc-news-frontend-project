import { useContext } from "react";
import { UserContext } from "../context/User";
import Bin from "../assets/bin_1.png";

function SingleComment({ comment, onDeleteHandler, error }) {
    const { user } = useContext(UserContext);

    const dateString = comment.created_at;
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const formattedDate = `${day}/${month}/${year}`;

    return (
        <div className="single-comment-card">
            {error ? (
                <p className="delete-comment-error-msg">Oops! Unable to delete that comment. Please try again later.</p>
            ) : null}
            <div className="single-comment-header">
                <p className="comment-author-date">
                    Posted by <span>{comment.author}</span> on <span>{formattedDate}</span>
                </p>

                {user === comment.author ? (
                    <div className="delete-btn-container">
                        <button className="delete-btn" onClick={() => onDeleteHandler(comment.comment_id)}>
                            <img className="bin-img" src={Bin} alt="bin icon" />
                        </button>
                    </div>
                ) : null}
            </div>

            <p className="comment-text">{comment.body}</p>

            <p className="comment-votes">
                <span>{comment.votes}</span> Votes
            </p>
        </div>
    );
}

export default SingleComment;
