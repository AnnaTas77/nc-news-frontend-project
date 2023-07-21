import Dot from "../assets/full-stop.png";

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <p className="footer-text">
                Developed by Anna Tasheva{" "}
                <span>
                    <img className="dot-image" src={Dot} alt="blue dot" />
                </span>
                {currentYear}
            </p>
        </footer>
    );
}

export default Footer;
