import React, { useContext } from "react";
import { Register, Login, Home } from "./pages";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

  function ProtectedRoute({ children }) {
    if (!currentUser) {
      return <Navigate to="login" />;
    }
    return children
  }

  return (
    <div>
      <Router>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Register />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
