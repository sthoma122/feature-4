import { Link } from "react-router-dom";

// make this look better
import "./Navigate.css"

const Navigate = () => (
    <footer>
        <nav class="navPL">
            <div class="child">
                <Link to="/">People</Link>
            </div>
            <div class="child">
                <Link to="/Location">Location</Link>
            </div>
        </nav>
    </footer>
);

export default Navigate;
