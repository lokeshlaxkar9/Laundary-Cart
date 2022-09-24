import "./App.css";
import Register from "./components/registration/Register";
import Login from "./components/login/Login";
import Forder from "./components/order/Forder";
import { Route, Routes } from "react-router-dom";
import CreateOrder from "./components/create-order/CreateOrder";
import NavLogin from "./components/NavLogin/NavLogin";
import NewLogin from "./components/login/NewLogin";
import Create from "./components/create/Create";
function App() {
  return (
    <Routes>
      <Route path="/order1" element={<Forder />} />
      <Route path="create" element={<CreateOrder />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<NewLogin />} />
      {/* <Route path="blank" element={<Create />} /> */}
    </Routes>
  );
}

export default App;
