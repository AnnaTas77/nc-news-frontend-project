import { useState } from "react";
import { Link } from "react-router-dom";

const HamburgerMenu = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburgerMenu = () => {
        setHamburgerOpen(!hamburgerOpen);
    };

    return (
        <div className="hamburger-container">
            <div className="hamburger-lines" onClick={toggleHamburgerMenu}>
                <div className={hamburgerOpen ? "burger burger1 opened" : "burger burger1 closed"} />
                <div className={hamburgerOpen ? "burger burger2 opened" : "burger burger2 closed"} />
                <div className={hamburgerOpen ? "burger burger3 opened" : "burger burger3 closed"} />
            </div>

            <div className={hamburgerOpen ? "hamburger-links active" : "hamburger-links closed"}>
                <Link
                    to="/articles"
                    onClick={() => {
                        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                        toggleHamburgerMenu();
                    }}
                >
                    Articles
                </Link>
                <Link
                    to="/topics"
                    onClick={() => {
                        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                        toggleHamburgerMenu();
                    }}
                >
                    Topics
                </Link>
            </div>
        </div>
    );
};

export default HamburgerMenu;
