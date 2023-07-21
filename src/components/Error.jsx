import React from "react";

function Error({ errorStatus, errorMessage }) {
    return (
        <div className="error-container">
            <p className="error-status">{errorStatus}</p>
            <p className="error-text">{errorMessage}</p>
        </div>
    );
}

export default Error;
