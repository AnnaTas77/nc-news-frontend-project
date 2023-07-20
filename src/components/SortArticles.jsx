import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { getArticlesByQuery } from "../utils/utils";

function SortArticles({ setArticles }) {
    const [searchParams, setSearchParams] = useSearchParams();

    const { topic } = useParams();

    useEffect(() => {
        const orderQuery = searchParams.get("order");
        const sortByQuery = searchParams.get("sort_by");

        if (orderQuery || sortByQuery) {
            getArticlesByQuery(sortByQuery, orderQuery, topic)
                .then((articlesByQuery) => {
                    setArticles(articlesByQuery);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [searchParams, topic, setArticles]);

    const sortBy = (newSortBy) => {
        const newParams = new URLSearchParams(searchParams);
        newParams.set("sort_by", newSortBy);

        const currentSortBy = searchParams.has("sort_by") ? searchParams.get("sort_by") : "created_at";

        const currentOrder = searchParams.has("order") ? searchParams.get("order") : "desc";

        if (currentSortBy === newSortBy) {
            if (currentOrder === "desc") {
                newParams.set("order", "asc");
            } else {
                newParams.set("order", "desc");
            }
        }

        setSearchParams(newParams);
    };

    return (
        <div className="sort-buttons-container">
            <button onClick={() => sortBy("created_at")}>Date</button>
            <button onClick={() => sortBy("comment_count")}>Comment Count</button>
            <button onClick={() => sortBy("votes")}>Votes Count</button>
        </div>
    );
}

export default SortArticles;
