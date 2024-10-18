import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Location from "./Location/Location.js";
import People from "./People/People.js";
import Navigate from "./Navigate/Navigate";

export default function Components() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<People />} />
                    <Route path="/Location" element={<Location />} />
                </Routes>
                
                {/* Always show Navigate at the bottom */}
                <br />
                <Navigate />
            </div>
        </Router>
    );
}
