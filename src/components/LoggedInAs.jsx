import { useContext } from "react";
import { UserContext } from "../context/User";
import LoginPic from "../assets/login_blue.png";

function LoggedInAs() {
    const { user } = useContext(UserContext);
    return (
        <div className="logged-in-as">
            <div className="logged-img-wrapper">
                <img className="logged-img" src={LoginPic} alt="person in a circle" />
            </div>
            <p className="logged-in-text">
                Logged in as <span>{user}</span>
            </p>
        </div>
    );
}

export default LoggedInAs;
