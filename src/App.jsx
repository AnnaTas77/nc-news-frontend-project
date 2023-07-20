import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import ArticlesList from "./components/ArticlesList";
import SingleArticle from "./components/SingleArticle";
import TopicsList from "./components/TopicsList";

function App() {
    return (
        <div className="app-container">
            <NavBar />
            <Routes>
                <Route path="/" element={<ArticlesList />} />
                <Route path="/articles" element={<ArticlesList />} />
                <Route path={"/articles/:article_id"} element={<SingleArticle />} />
                <Route path={"/topics"} element={<TopicsList />} />
                <Route path={"/topics/:topic"} element={<ArticlesList />} />
            </Routes>
        </div>
    );
}

export default App;
