import { useContext } from "react";
import { UserContext } from "../context/User";

function LoggedInAs() {
    const { user } = useContext(UserContext);
    return (
        <div className="logged-in-as">
            <p>
                Logged in as <span>{user}</span>
            </p>
        </div>
    );
}

export default LoggedInAs;
