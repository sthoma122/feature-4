// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Location from "./Location/Location.js";
import People from "./People/People.js";
// import ReNav from "./Navigate/Navigate";

// export default function Components() {
//     return (
//         <Router>
//             <div>
//                 <Routes>
//                     <Route path="/" element={<People />} />
//                     <Route path="/Location" element={<Location />} />
//                 </Routes>
                
//                 {/* Always show Navigate at the bottom */}
//                 <br />
//                 <Navigate />
//             </div>
//         </Router>
//     );
// }

import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";
import AuthModule from "./Auth/Auth.js";
import AuthRegister from "./Auth/AuthRegister";
import AuthLogin from "./Auth/AuthLogin";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute.js";
// import MainList from "./Main/MainList.js";

export default function Components() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthModule />} />
        <Route path="/auth/register" element={<AuthRegister />} />
        <Route path="/auth/login" element={<AuthLogin />} />
        <Route
          path="/"
        //   element={<ProtectedRoute path="/" element={MainList} />}
        element={<ProtectedRoute path="/people" element={People} />}
        />
        <Route
          path="/location"
        element={<ProtectedRoute path="/location" element={Location} />}
        />
        <Route path="*" element={<Navigate to="/auth" replace />} />
      </Routes>
    </Router>
  );
}
