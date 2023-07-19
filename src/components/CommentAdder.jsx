import { useState } from "react";
import { postNewComment } from "../utils/utils";

function CommentAdder({ articleId, setComments }) {
    const [newComment, setNewComment] = useState({
        username: "grumpy19",
        body: "",
    });

    const handleFormSubmit = (event) => {
        event.preventDefault();
        postNewComment(articleId, newComment)
            .then((postedCommentFromDB) => {
                setComments((currentComments) => {
                    return [postedCommentFromDB, ...currentComments];
                });
            })
            .catch((err) => {
                console.log(err);
            });

        setNewComment({
            username: "grumpy19",
            body: "",
        });
    };

    console.log("newComment", newComment);

    return (
        <div className="form-container">
            <form className="comment-adder-form" onSubmit={handleFormSubmit}>
                <label htmlFor="comment-text">Add a new comment</label>
                <textarea
                    id="comment-text"
                    type="text"
                    required
                    maxLength="250"
                    value={newComment.body}
                    onChange={(event) => {
                        setNewComment((currentComment) => {
                            return { ...currentComment, body: event.target.value };
                        });
                    }}
                ></textarea>

                <div className="add-button-container">
                    <button>Add Comment</button>
                </div>
            </form>
        </div>
    );
}

export default CommentAdder;
