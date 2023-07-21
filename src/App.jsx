import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import ArticlesList from "./components/ArticlesList";
import SingleArticle from "./components/SingleArticle";
import TopicsList from "./components/TopicsList";
import LoggedInAs from "./components/LoggedInAs";
import Error from "./components/Error";

function App() {
    return (
        <div className="app-container">
            <NavBar />
            <LoggedInAs />
            <Routes>
                <Route path="/" element={<ArticlesList />} />
                <Route path="/articles" element={<ArticlesList />} />
                <Route path={"/articles/:article_id"} element={<SingleArticle />} />
                <Route path={"/topics"} element={<TopicsList />} />
                <Route path={"/topics/:topic"} element={<ArticlesList />} />
                <Route
                    path="*"
                    element={<Error errorStatus={404} errorMessage={"Not found: Page does not exist."} />}
                />
            </Routes>
        </div>
    );
}

export default App;
