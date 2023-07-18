import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../utils/utils";
import CommentsList from "./CommentsList";

function SingleArticle() {
    const { article_id } = useParams();
    const [article, setArticle] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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

                <div className="comments-votes-container">
                    <p>
                        {article.comment_count} <span>Comments</span>
                    </p>
                    <p className="votes">
                        {article.votes} <span>Votes</span>
                    </p>
                </div>
            </div>
            <CommentsList articleId={article_id} />
        </article>
    );
}

export default SingleArticle;
