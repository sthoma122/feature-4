import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { checkUser } from "./AuthService";

// Right now the auth things are coppied from feature 5 kickoff solution
// I need to make it sutible for our needs and with all the necessary checks
// I'm starting by making sure I understand how it works


const AuthModule = () => {
    const navigate = useNavigate();

    // redirect already authenticated users back to home
    useEffect(() => {
        if (checkUser()) {
            alert("You are already logged in");
            navigate("/");
        }
    }, [navigate]);

    return (
        <div>
            <Link to="/auth/register">
                <button>Register</button>
            </Link>
            <br />
            <br />
            <Link to="/auth/login">
                <button>Login</button>
            </Link>
        </div>
    );
};

export default AuthModule;
