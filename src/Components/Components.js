import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// need to import things from Home, CreatePage, and RemovePage
// this page is essentially a nav page ... ?

import RemovePage from "./RemovePage/RemovePage";
import CreatePage from "./CreatePage/CreatePage";
import Navigate from "./Navigate/Navigate";

import "./Components.css";

// need to modify to have correct things
export default function Components() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<CreatePage />} />
          <Route path="/remove" element={<RemovePage />} />
        </Routes>
        <Navigate />
      </Router>
    );
  }
  