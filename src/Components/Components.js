import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Location from "./Location/Location.js";
import People from "./People/People.js";
import Navigate from "./Navigate/Navigate";
import "./Components.css";

export default function Components() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<People />} />
                    <Route path="/Location" element={<Location />} />
                </Routes>
                
                {/* Always show Navigate at the bottom */}
                <Navigate />
            </div>
        </Router>
    );
}
