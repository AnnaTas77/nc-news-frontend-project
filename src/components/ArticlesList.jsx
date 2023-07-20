import { useEffect, useState } from "react";
import { getAllArticles, getArticlesByTopic } from "../utils/utils";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function ArticlesList() {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { topic } = useParams();

    useEffect(() => {
        setIsLoading(true);

        if (topic) {
            getArticlesByTopic(topic)
                .then((articlesByTopic) => {
                    setArticles(articlesByTopic);
                })
                .then(() => {
                    setIsLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            getAllArticles()
                .then((articlesFromDB) => {
                    setArticles(articlesFromDB);
                })
                .then(() => {
                    setIsLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [topic]);

    return isLoading ? (
        <p className="article-list-loading">Loading...</p>
    ) : (
        <main className="articles-container">
            <ul className="articles-list">
                {articles.map((article) => {
                    const dateString = article.created_at;
                    const date = new Date(dateString);
                    const year = date.getFullYear();
                    const month = date.getMonth() + 1;
                    const day = date.getDate();
                    const formattedDate = `${day}/${month}/${year}`;

                    return (
                        <li key={article.article_id} className="article-card">
                            <Link to={`/articles/${article.article_id}`}>
                                <div className="article-header">
                                    <h4 className="topic">{article.topic}</h4>
                                </div>

                                <div className="article-body">
                                    <img
                                        className="article-image"
                                        src={article.article_img_url}
                                        alt={`An image related to the topic of ${article.topic}`}
                                    />
                                    <div>
                                        <h4 className="article-title">{article.title}</h4>
                                        <p>
                                            Posted by <span>{article.author}</span> on <span>{formattedDate}</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="article-footer">
                                    <p>
                                        <span> {article.comment_count}</span> Comments
                                    </p>
                                    <p className="votes">
                                        <span>{article.votes}</span> Votes
                                    </p>
                                </div>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </main>
    );
}

export default ArticlesList;
