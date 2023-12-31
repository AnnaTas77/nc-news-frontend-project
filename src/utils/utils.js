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

export const postNewComment = (articleId, newComment) => {
    const postRequestBody = { username: newComment.username, body: newComment.body };

    return ncNewsBaseUrl.post(`/api/articles/${articleId}/comments`, postRequestBody).then((response) => {
        return response.data.postedComment;
    });
};

export const getAllTopics = () => {
    return ncNewsBaseUrl.get("/api/topics").then((response) => {
        return response.data.topics;
    });
};

export const getArticlesByTopic = (topicName) => {
    return ncNewsBaseUrl.get(`/api/articles?topic=${topicName}`).then((response) => {
        return response.data.articles;
    });
};

export const getArticlesByQuery = (sortBy, order, topic) => {
    const params = { sort_by: sortBy, order: order };

    if (topic) {
        params.topic = topic;
    }

    return ncNewsBaseUrl.get("api/articles", { params }).then((response) => {
        return response.data.articles;
    });
};

export const deleteCommentById = (commentId) => {
    return ncNewsBaseUrl.delete(`/api/comments/${commentId}`);
};
