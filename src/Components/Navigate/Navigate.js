import { Link } from "react-router-dom";

// make this look better

const Navigate = () => (
    <footer>
        <nav>
            <div>
                <Link to="/">Create</Link>
            </div>
            <div>
                <Link to="/remove">Remove</Link>
            </div>
        </nav>
    </footer>
);

export default Navigate;
