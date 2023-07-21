import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, patchCommentByArticleId } from "../utils/utils";
import CommentsList from "./CommentsList";
import ThumbUp from "../assets/thumb-up.png";
import ThumbDown from "../assets/thumb-down.png";

function SingleArticle() {
    const { article_id } = useParams();
    const [article, setArticle] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [userVotes, setUserVotes] = useState(0);
    const [isError, setIsError] = useState(false);
    const [hasVoted, setHasVoted] = useState(false);

    const [userComments, setUserComments] = useState(0);

    const dateString = article.created_at;
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const formattedDate = `${day}/${month}/${year}`;

    useEffect(() => {
        setIsLoading(true);

        getArticleById(article_id)
            .then((articleFromDB) => {
                setArticle(articleFromDB);
            })
            .then(() => {
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [article_id]);

    const handleVoteClick = (voteValue) => {
        if (!hasVoted) {
            if (voteValue === 1) {
                setUserVotes((currentVotes) => {
                    return currentVotes + 1;
                });
                setHasVoted(true);
            } else {
                setUserVotes((currentVotes) => {
                    return currentVotes - 1;
                });
                setHasVoted(true);
            }

            patchCommentByArticleId(article_id, voteValue).catch((err) => {
                console.log(err);

                if (voteValue === 1) {
                    setUserVotes((currentVotes) => {
                        return currentVotes - 1;
                    });
                } else {
                    setUserVotes((currentVotes) => {
                        return currentVotes + 1;
                    });
                }

                setIsError(true);
            });
        }
    };

    return isLoading ? (
        <p className="single-article-loading">Loading...</p>
    ) : (
        <article className="article-container">
            <div className="single-article">
                <h2>{article.title}</h2>
                <p className="article-author-date">
                    Written by <span>{article.author}</span> on <span>{formattedDate}</span>
                </p>
                <p className="article-topic">
                    Topic: <span>{article.topic}</span>
                </p>

                <img src={article.article_img_url} alt={`An image related to the topic of ${article.topic}`} />

                <p className="article-text">{article.body}</p>

                <div className="vote-buttons-container">
                    <button
                        className="like-btn"
                        onClick={() => {
                            handleVoteClick(1);
                        }}
                        disabled={hasVoted}
                    >
                        <img src={ThumbUp} alt="thumb up" />
                    </button>
                    <button
                        className="dislike-btn"
                        onClick={() => {
                            handleVoteClick(-1);
                        }}
                        disabled={hasVoted}
                    >
                        <img src={ThumbDown} alt="thumb down" />
                    </button>
                </div>

                {isError ? <p className="vote-error-msg">Something went wrong. Please try again later.</p> : null}

                <div className="comments-votes-container">
                    <p>
                        {article.comment_count + userComments} <span>Comments</span>
                    </p>

                    <p className="votes">{article.votes + userVotes} Votes</p>
                </div>
            </div>
            <CommentsList articleId={article_id} setUserComments={setUserComments} />
        </article>
    );
}

export default SingleArticle;
