import axios from "axios";

const ncNewsBaseUrl = axios.create({
    baseURL: "https://news-backend-project.onrender.com",
});

export const getAllArticles = () => {
    return ncNewsBaseUrl.get("/api/articles").then((response) => {
        return response.data.articles;
    });
};
