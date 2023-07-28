import { Link } from "react-router-dom";
import Header from "./Header";
import HamburgerMenu from "./HamburgerMenu";

function NavBar() {
    return (
        <div className="navbar-header-container">
            <Header />
            <nav className="navbar-container">
                <Link
                    to="/articles"
                    onClick={() => {
                        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                    }}
                >
                    Articles
                </Link>
                <Link
                    to="/topics"
                    onClick={() => {
                        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                    }}
                >
                    Topics
                </Link>
            </nav>
            <HamburgerMenu />
        </div>
    );
}

export default NavBar;
