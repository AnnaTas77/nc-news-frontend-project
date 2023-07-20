import { Link } from "react-router-dom";
import Header from "./Header";

function NavBar() {
    return (
        <div className="navbar-header-container">
            <Header />
            <nav className="navbar-container">
                <Link to="/articles">Articles</Link>
                <Link to="/topics">Topics</Link>
            </nav>
        </div>
    );
}

export default NavBar;
