import { useEffect, useState } from "react";
import { getAllCommentsByArticleId } from "../utils/utils";
import SingleComment from "./SingleComment";

function CommentsList({ articleId }) {
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    console.log("comments: ", comments);

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

    return comments ? (
        isLoading ? (
            <p className="comments-list-loading">Loading Comments...</p>
        ) : (
            <div className="comments-container">
                {comments.map((comment) => {
                    return <SingleComment key={comment.comment_id} comment={comment} />;
                })}
            </div>
        )
    ) : (
        <p className="no-comments-msg">There are no comments for this article.</p>
    );
}

export default CommentsList;
