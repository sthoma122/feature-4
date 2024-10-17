import { Link } from "react-router-dom";

// make this look better

const Navigate = () => (

    // <Main />

    <footer>
        <nav>
            <div>
                <Link to="/people">People</Link>
            </div>
            <div>
                <Link to="/location">Locations</Link>
            </div>
        </nav>
    </footer>
);

export default Navigate;