import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { getArticlesByQuery } from "../utils/utils";

function SortArticles({ setArticles }) {
    const [isError, setIsError] = useState(false);

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
                    setIsError(true);
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
            <div className="sort-by-dropdown">
                <label htmlFor="touch">
                    <span className="sort-span">Sort by</span>
                </label>
                <input type="checkbox" id="touch" />

                <div className="slide">
                    <div className="slide-wrapper">
                        <button className="sort-btn" onClick={() => sortBy("created_at")}>
                            Date
                        </button>
                        <button className="sort-btn" onClick={() => sortBy("comment_count")}>
                            Comment Count
                        </button>
                        <button className="sort-btn" onClick={() => sortBy("votes")}>
                            Votes Count
                        </button>
                    </div>
                </div>
            </div>
            {isError ? <p className="sort-error-msg">Something went wrong. Please try again later.</p> : null}
        </div>
    );
}

export default SortArticles;
