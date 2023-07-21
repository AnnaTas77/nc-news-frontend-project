import { useEffect, useState } from "react";
import { deleteCommentById, getAllCommentsByArticleId } from "../utils/utils";
import SingleComment from "./SingleComment";
import CommentAdder from "./CommentAdder";

function CommentsList({ articleId }) {
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsError(false);
        getAllCommentsByArticleId(articleId)
            .then((commentsFromDB) => {
                setComments(commentsFromDB);
            })
            .then(() => {
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [articleId]);

    const onDeleteHandler = (commentId) => {
        deleteCommentById(commentId)
            .then(() => {
                const updatedComments = comments.filter((comment) => {
                    return comment.comment_id !== commentId;
                });
                setComments(updatedComments);
            })
            .catch((err) => {
                console.log(err);
                setIsError(true);
            });
    };

    return (
        <div>
            <CommentAdder articleId={articleId} setComments={setComments} />
            {comments ? (
                isLoading ? (
                    <p className="comments-list-loading">Loading Comments...</p>
                ) : (
                    <div className="comments-container">
                        {isError ? (
                            <p className="delete-comment-error-msg">
                                Unable to delete that comment. Please try again later.
                            </p>
                        ) : null}
                        {comments.map((comment) => {
                            return (
                                <SingleComment
                                    key={comment.comment_id}
                                    comment={comment}
                                    onDeleteHandler={onDeleteHandler}
                                    isError={isError}
                                />
                            );
                        })}
                    </div>
                )
            ) : (
                <p className="no-comments-msg">There are no comments for this article.</p>
            )}
        </div>
    );
}

export default CommentsList;
