import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// need to import things from Home, CreatePage, and RemovePage

import Location from "./Location/Location.js";
import People from "./People/People.js";
import Navigate from "./Navigate/Navigate";

import "./Components.css";
import Main from "./Main/Main.js"

// need to modify to have correct things
export default function Components() {
    return (
        <div>
            <Main />
            <Router>
                <Routes>
                    <Route path="/" element={<People />} />
                    <Route path="/remove" element={<Location />} />
                </Routes>
                
                {/* consider moving to somewhere else */}
                <Navigate />
            </Router>
      </div>
    );
  }
  