import { Link } from "react-router-dom";

// make this look better

const Navigate = () => (

    // <Main />

    <footer>
        <nav>
            <div>
                <Link to="/">People</Link>
            </div>
            <div>
                <Link to="/Location">Location</Link>
            </div>
        </nav>
    </footer>
);

export default Navigate;
