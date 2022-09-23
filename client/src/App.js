import "./App.css";
import Register from "./components/registration/Register";
import Login from "./components/login/Login";
import Forder from "./components/order/Forder";
import { Route, Routes } from "react-router-dom";
import CreateOrder from "./components/create-order/CreateOrder";
function App() {
  return (
    <Routes>
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="new" element={<h1>New Route</h1>} />
      <Route path="create" element={<CreateOrder />} />
      <Route path="order1" element={<Forder />} />
    </Routes>
  );
}

export default App;
