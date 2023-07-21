import { useEffect, useState } from "react";
import { deleteCommentById, getAllCommentsByArticleId } from "../utils/utils";
import SingleComment from "./SingleComment";
import CommentAdder from "./CommentAdder";

function CommentsList({ articleId, setUserComments }) {
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [commentIdWithError, setCommentIdWithError] = useState(-1);

    const [isError, setIsError] = useState(false);
    // const [trigger, setTrigger] = useState(false);
    const [successfullyDeleted, setSuccessfullyDeleted] = useState(false);

    useEffect(() => {
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
        setIsError(false);
        setUserComments((currentCommentCount) => {
            return currentCommentCount - 1;
        });

        deleteCommentById(commentId)
            .then(() => {
                const updatedComments = comments.filter((comment) => {
                    return comment.comment_id !== commentId;
                });
                setComments(updatedComments);
                setSuccessfullyDeleted(true);

                setTimeout(() => {
                    setSuccessfullyDeleted(false);
                }, 2000);
            })
            .catch((err) => {
                console.log(err);
                setCommentIdWithError(commentId);
                setIsError(true);
                setUserComments((currentCommentCount) => {
                    return currentCommentCount + 1;
                });
            });
    };

    return (
        <div>
            <CommentAdder articleId={articleId} setComments={setComments} setUserComments={setUserComments} />
            {comments ? (
                isLoading ? (
                    <p className="comments-list-loading">Loading Comments...</p>
                ) : (
                    <div className="comments-container">
                        {!isError && successfullyDeleted ? (
                            <p className="successfully-deleted">Comment deleted successfully.</p>
                        ) : null}
                        {comments.map((comment) => {
                            return (
                                <SingleComment
                                    key={comment.comment_id}
                                    comment={comment}
                                    error={commentIdWithError === comment.comment_id}
                                    onDeleteHandler={onDeleteHandler}
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
