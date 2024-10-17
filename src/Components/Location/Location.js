import { useNavigate} from "react-router-dom";
// useNavigate is a hook that lets you pass navigate to the new path you’d like
// the user to be taken to when navigate is invoked

// import { Link } from "react-router-dom";

// notes:
// <Routes> looks through all its child routes to find the best match and renders that branch of the UI.
// <Route> A route is a conditionally shown component that allows you to map your app’s location to different React components

export default function Location() {
    const history = useNavigate();

    // const buttonHandler = () => {
    //     history("/");
    // };

    return (
        <section>
            {/* <button onClick={buttonHandler}>Remove</button> */}
        </section>

    );

}
