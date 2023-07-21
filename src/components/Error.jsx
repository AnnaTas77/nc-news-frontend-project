import Warning from "../assets/warning.png";

function Error({ errorStatus, errorMessage }) {
    return (
        <div className="error-container">
            <p className="error-status">{errorStatus}</p>
            <p className="error-text">
                <span className="img-wrapper">
                    <img className="waring-img" src={Warning} alt="red triangle with an exclamation mark inside" />
                </span>
                {errorMessage}
            </p>
        </div>
    );
}

export default Error;
