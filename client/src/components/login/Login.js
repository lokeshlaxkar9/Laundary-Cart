import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.css";

function Login() {
  const [input, setinput] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    if (!input.password || !input.password) {
      console.log("yeah");
    } else {
      e.preventDefault();
      console.log(input);
      try {
        const user = await axios.post("http://localhost:8080/login", input);
        console.log(user.data);
        navigate("/new");
      } catch (e) {
        console.log(e.message);
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
            Mobile / Email
            <input
              type="email"
              name="email"
              placeholder="email"
              required
              onChange={(e) => setinput({ ...input, email: e.target.value })}
            />
          </div>
          <div className="box23"></div>
          <div className="box24">
            <span>Password</span>
            <input
              type="password"
              name="password"
              placeholder="password"
              required
              onChange={(e) => setinput({ ...input, password: e.target.value })}
            />
            <span className="box242"></span>
          </div>
          <div className="box25"></div>
          <div className="box26">Forget Password?</div>
          <div className="box27">
            Sign In
            <button onClick={handleSubmit}>Sign In</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
