import React from "react";
import { useNavigate } from "react-router-dom";
import { checkUser } from "../Auth/AuthService";

// You can pass props using the spread operator to throw them on an object if there are too many to break out
const ProtectedRoute = ({ element: Component, ...rest }) => {
    console.log("element: ", Component);
    const navigate = useNavigate();
    const goBackHandler = () => {
        navigate("/auth");
    };

    // this is used for preventing just writing into the search bar
    // check user is true or false
    if (checkUser()) {
        return <Component />;
    } else {
        return (
            <div>
                <p>Unauthorized!</p> <button onClick={goBackHandler}>Go Back.</button>
            </div>
        );
    }
};

export default ProtectedRoute;
