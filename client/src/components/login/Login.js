import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import { useEffect } from "react";
import "./Login.css";
import Footer from "../footer/Footer";

function Login() {
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
      const { data } = await axios.post("http://localhost:8080/login", input);
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
      <div className="login">
        <div className="box1">
          <div className="box11">Laundry Service</div>
          <div className="box12">Doorstep Wash & Dryclean Service</div>
          <div className="box13">Don’t Have An Account?</div>
          <div className="box14">
            <button
              onClick={() => {
                navigate("/register");
              }}
            >
              Register
            </button>
          </div>
        </div>
        <div className="box2">
          <form>
            <div className="box21">SIGN IN</div>
            <div className="box22">
              <label>Mobile / Email</label>
              <br />
              <input
                type="email"
                name="email"
                className="lv1"
                onChange={(e) => setinput({ ...input, email: e.target.value })}
              />
            </div>

            <div className="box24">
              <span>Password</span>
              <input
                type="password"
                name="password"
                className="lv1"
                onChange={(e) =>
                  setinput({ ...input, password: e.target.value })
                }
              />
            </div>
            <div className="box26">Forget Password?</div>
            <div className="box">
              <button onClick={handleSubmit} id="login-page-signin">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Login;
