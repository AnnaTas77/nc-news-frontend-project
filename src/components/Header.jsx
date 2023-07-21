import { Link } from "react-router-dom";
import Logo from "../assets/robot-logo.png";

function Header() {
    return (
        <Link
            to={`/articles`}
            onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
        >
            <header>
                <img className="logo" src={Logo} alt="logo - smiling robot" />
                <h1>NC News</h1>
            </header>
        </Link>
    );
}

export default Header;
