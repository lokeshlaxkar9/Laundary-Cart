import React, { useState, useEffect } from "react";
import axios from "axios";
import "./register.css";
import Navbar from "../navbar/Navbar";
import { useNavigate } from "react-router-dom";
import Footer from "../footer/Footer";

const Register = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      navigate("/order1");
    }
  }, []);

  const [input, setinput] = useState({
    name: "",
    email: "",
    phone: "",
    state: "rajasthan",
    district: "kota",
    address: "",
    pincode: "",
    password: "",
  });
  const [check, setCheck] = useState(false);
  const handlesubmit = async (e) => {
    e.preventDefault();
    if (!check) return alert("all fields are required");

    try {
      const response = await axios.post(
        "https://lpglaundry.herokuapp.com/register",
        input
      );
      navigate("/login");
    } catch (e) {
      if (e.code === "ERR_BAD_REQUEST") alert("Email and Phone must be unique");
      else alert("Invalid Details all feilds are required");
      console.log(e.message);
    }
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="header">
          <div className="line1">
            <p>Laundry Service</p>
          </div>
          <div className="line2">
            <p>Doorstep Wash & Dryclean Service</p>
          </div>
          <div className="line3">
            <p>Already Have Account</p>
          </div>
          <button id="registration-signin" onClick={() => navigate("/login")}>
            Sign In
          </button>
        </div>

        {/* Registration form part */}
        <div className="rform">
          <p className="p1">REGISTER</p>
          <div className="forminput">
            <form
              action="#"
              encType="multipart/form-data"
              onSubmit={handlesubmit}
            >
              <div className="box">
                <div className="left">
                  <label>Name</label>
                  <br />
                  <input
                    type="text"
                    className="lv1"
                    name="name"
                    onChange={(e) =>
                      setinput({ ...input, name: e.target.value })
                    }
                  />
                  <br />
                  <label>Phone</label>
                  <br />
                  <input
                    type="text"
                    className="lv1"
                    name="phone"
                    onChange={(e) =>
                      setinput({ ...input, phone: e.target.value })
                    }
                  />
                  <br />
                  <label>District</label>
                  <br />
                  <select
                    name="district"
                    className="lv1"
                    onChange={(e) =>
                      setinput({ ...input, district: e.target.value })
                    }
                  >
                    <option value="kota">Kota</option>
                    <option value="hyderabad">Hyderabad</option>
                  </select>
                  <br />
                  <label>Pincode</label>
                  <br />
                  <input
                    type="text"
                    name="pincode"
                    className="lv1"
                    onChange={(e) =>
                      setinput({ ...input, pincode: e.target.value })
                    }
                  />
                </div>

                <div className="right">
                  <label>Email</label>
                  <br />
                  <input
                    type="email"
                    name="email"
                    className="lv1"
                    onChange={(e) =>
                      setinput({ ...input, email: e.target.value })
                    }
                  />
                  <br />
                  <label>State</label>
                  <br />
                  <select
                    name="state"
                    id=""
                    className="lv1"
                    onChange={(e) =>
                      setinput({ ...input, state: e.target.value })
                    }
                  >
                    <option value="rajasthan">Rajasthan</option>
                    <option value="odisha">Odisha</option>
                    <option value="telengana">Telengana</option>
                  </select>
                  <br />
                  <label>Address</label>
                  <br />
                  <input
                    type="text"
                    name="address"
                    className="lv1"
                    onChange={(e) =>
                      setinput({ ...input, address: e.target.value })
                    }
                  />
                  <br />
                  <label>password</label>
                  <br />
                  <input
                    type="password"
                    className="lv1"
                    name="password"
                    onChange={(e) =>
                      setinput({ ...input, password: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="npara">
                <input
                  type="checkbox"
                  name="check"
                  onChange={() => setCheck(!check)}
                />
                <label>
                  {" "}
                  I agree to Terms & Condition receiving marketing and
                  promotional materials
                </label>
              </div>

              <button type="submit" className="registersubmit">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
