import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import { useEffect } from "react";
import "./Login.css";

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
    if (!input.password || !input.password) {
      console.log("email or password is required");
    } else {
      e.preventDefault();
      console.log(input);
      try {
        const { data } = await axios.post("http://localhost:8080/login", input);
        console.log(data);
        localStorage.setItem("userInfo", JSON.stringify(data));
        localStorage.setItem("userId", data.id);
        alert("login successful");
        navigate("/order1");
      } catch (e) {
        alert("Invalid Credentials");
      }
    }
  };
  return (
    <div className="login">
      <div className="box1">
        <div className="box11">Laundry Service</div>
        <div className="box12">Doorstep Wash & Dryclean Service</div>
        <div className="box13">Don’t Have An Account?</div>
        <div className="box14">
          <button>Register</button>
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
              onChange={(e) => setinput({ ...input, password: e.target.value })}
            />
          </div>
          <div className="box26">Forget Password?</div>
          <div className="box27">
            <button onClick={handleSubmit}>Sign In</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
