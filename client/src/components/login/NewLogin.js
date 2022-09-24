import "./NewLogin.css";
import React, { useState, useEffect } from "react";
import Navbar from "../navbar/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../footer/Footer";
function NewLogin() {
  const [input, setinput] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      navigate("/order1");
    }
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://lpglaundry.herokuapp.com/login",
        input
      );
      localStorage.setItem("userInfo", JSON.stringify(data));
      localStorage.setItem("userId", data.id);
      localStorage.setItem("username", data.name);
      navigate("/order1");
    } catch (e) {
      alert("Invalid Credentials");
    }
  };
  return (
    <>
      <Navbar />
      <main className="login-main">
        <section className="login-left-section">
          <div className="login-heading-container">
            <div className="login-heading">
              <h1>Laundry Service</h1>
              <p>Doorstep Wash & Dryclean Service</p>
            </div>
            <div className="register-button-container">
              <p>Don't Have An Account?</p>
              <button onClick={() => navigate("/register")}>Register</button>
            </div>
          </div>
        </section>
        <section className="login-right-section">
          <div className="form-container">
            <h1>SIGN IN</h1>
            <form className="login-form">
              <input
                type="text"
                name="email"
                className="signin-inputs"
                placeholder="Email"
                onChange={(e) => setinput({ ...input, email: e.target.value })}
              />
              <br />
              <br />
              <input
                type="password"
                name="password"
                className="signin-inputs"
                placeholder="Password"
                style={{
                  background: " none",
                  padding: "3px",
                  fontSize: "1.12em",
                  border: "none",
                  borderBottom: "1.5px solid #acb3ba76",
                }}
                onChange={(e) =>
                  setinput({ ...input, password: e.target.value })
                }
              />
              <p>Forget Password?</p>
              <div id="signin-btn-container">
                <button id="signin-btn" onClick={handleSubmit}>
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default NewLogin;
