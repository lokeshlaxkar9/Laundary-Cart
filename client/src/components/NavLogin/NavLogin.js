import "./NavLogin.css";
import React from "react";
import { useNavigate } from "react-router-dom";

function NavLogin() {
  const navigate = useNavigate();
  const handleLogout = () => {
    if (window.confirm("Are you sure!")) {
      localStorage.clear();
      navigate("/login");
    }
  };
  const username = localStorage.getItem("username");
  return (
    <nav className="nav-login">
      <div id="brand-name">LAUNDRY</div>
      <div id="nav-links">
        <div className="nav-link" id="userName">
          {username || "USERNAME"}
        </div>
        <div className="nav-link" id="logOut" onClick={handleLogout}>
          Logout
        </div>
      </div>
    </nav>
  );
}

export default NavLogin;
