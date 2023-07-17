import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import ArticlesList from "./components/ArticlesList";

function App() {
    return (
        <div className="app-container">
            <NavBar />
            <Routes>
                <Route path="/articles" element={<ArticlesList />} />
            </Routes>
        </div>
    );
}

export default App;
