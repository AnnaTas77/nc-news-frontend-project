import { useEffect, useState } from "react";
import { getAllArticles } from "../utils/utils";

function ArticlesList() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getAllArticles().then((articlesFromDB) => {
            setArticles(articlesFromDB);
        });
    }, []);

    return (
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
                            <h3>Topic: {article.topic}</h3>
                            <img className="article-image" src={article.article_img_url} />
                            <h4 className="article-title">{article.title}</h4>
                            <p>
                                Posted by <span>{article.author}</span> on <span>{formattedDate}</span>
                            </p>
                            <p>Comments: {article.comment_count}</p>
                            <p>Votes: {article.votes}</p>
                        </li>
                    );
                })}
            </ul>
        </main>
    );
}

export default ArticlesList;
