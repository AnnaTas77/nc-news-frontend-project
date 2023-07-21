import { useState } from "react";
import { postNewComment } from "../utils/utils";

function CommentAdder({ articleId, setComments, setUserComments }) {
    const [newComment, setNewComment] = useState({
        username: "grumpy19",
        body: "",
    });

    const [isError, setIsError] = useState(false);
    const [hasCommented, setHasCommented] = useState(false);
    const [commentLengthError, setCommentLengthError] = useState(false);

    const handleInputChange = (event) => {
        if (event.target.value.length === 250) {
            setCommentLengthError(true);
            setTimeout(() => {
                setCommentLengthError(false);
            }, 2000);
        }

        setNewComment((currentComment) => {
            return { ...currentComment, body: event.target.value };
        });
    };

    const handleClick = () => {
        if (newComment.body) {
            setHasCommented(true);

            setUserComments((currentComments) => {
                return currentComments + 1;
            });
        }
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        postNewComment(articleId, newComment)
            .then((postedCommentFromDB) => {
                setComments((currentComments) => {
                    return [postedCommentFromDB, ...currentComments];
                });
            })
            .then(() => {
                setHasCommented(false);
            })
            .catch((err) => {
                console.log(err);
                setIsError(true);
                setUserComments((currentComments) => {
                    return currentComments - 1;
                });
            });

        setNewComment({
            username: "grumpy19",
            body: "",
        });
    };

    return (
        <div className="form-container">
            {isError ? (
                <p className="post-comment-error-msg">Oops! Your comment could not be added. Please try again later.</p>
            ) : null}
            <form className="comment-adder-form" onSubmit={handleFormSubmit}>
                <label htmlFor="comment-text">
                    <span>Add a new comment</span>
                    {commentLengthError ? (
                        <p className="comment-length-error">You have reached the 250 characters limit.</p>
                    ) : (
                        <span className="chars-left">{250 - newComment.body.length} characters left</span>
                    )}
                </label>

                <textarea
                    id="comment-text"
                    type="text"
                    required
                    maxLength="250"
                    value={newComment.body}
                    onChange={handleInputChange}
                ></textarea>

                <div className="add-button-container">
                    <button className="add-comment-btn" onClick={handleClick} disabled={hasCommented}>
                        Add Comment
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CommentAdder;
