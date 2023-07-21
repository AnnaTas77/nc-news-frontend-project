import Logo from "../assets/robot.png";

function Header() {
    return (
        <header>
            <img className="logo" src={Logo} alt="logo - smiling robot" />
            <h1>NC News</h1>
        </header>
    );
}

export default Header;
