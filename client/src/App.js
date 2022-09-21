import "./App.css";
import Register from "./components/registration/Register";
import Login from "./components/login/Login";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="new" element={<h1>New Route</h1>} />
    </Routes>
  );
}

export default App;
