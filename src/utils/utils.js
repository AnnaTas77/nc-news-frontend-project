import axios from "axios";

const ncNewsBaseUrl = axios.create({
    baseURL: "https://news-backend-project.onrender.com",
});

export const getAllArticles = () => {
    return ncNewsBaseUrl.get("/api/articles").then((response) => {
        return response.data.articles;
    });
};

export const getArticleById = (id) => {
    return ncNewsBaseUrl.get(`/api/articles/${id}`).then((response) => {
        return response.data.article;
    });
};

export const getAllCommentsByArticleId = (id) => {
    return ncNewsBaseUrl.get(`/api/articles/${id}/comments`).then((response) => {
        return response.data.comments;
    });
};

export const patchCommentByArticleId = (articleId, voteValue) => {
    const patchRequestBody = {
        inc_votes: voteValue,
    };

    return ncNewsBaseUrl.patch(`/api/articles/${articleId}`, patchRequestBody).then((response) => {
        return response.data.updatedArticle;
    });
};
