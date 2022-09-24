import React from "react";
import "./footer.css";
import footerimg from "../images/Footer.svg";
import fblogo from "../images/facebook .svg";
import lilogo from "../images/linkedin.svg";
import instalogo from "../images/instagram.svg";

const Footer = () => {
  return (
    <>
      <div className="footer1">
        <div className="level1">
          <p className="para1">Now Refer & Earn ₹500 for every referral*</p>
          <p className="para2">* Terms and conditions will be applied</p>
        </div>
        <div
          className="level2"
          style={{ backgroundImage: `url(${footerimg})` }}
        >
          <div className="boxn1">
            <p className="parasp2">ABOUT US</p>
            <p className="parasp">Doorstep Wash & Dryclean Service</p>
          </div>
          <div className="boxn2" id="box2">
            <p className="para1">Home</p>
            <p className="parasp">Sign In</p>
            <p className="parasp">Register</p>
          </div>
          <div className="boxn3">
            <p className="para1">Pricing</p>
          </div>
          <div className="boxn4">
            <p className="para1">Career</p>
            <p className="parasp">Blogs</p>
            <p className="parasp">Create</p>
          </div>
          <div className="boxn5">
            <p className="para1">Contact</p>
          </div>
          <div className="boxn6">
            <p className="parasp2">SOCIAL MEDIA</p>
            <div className="images">
              <img src={fblogo} alt="fblogo" className="img1" />
              <img src={instalogo} alt="instalogo" className="img1" />
              <img src={lilogo} alt="linkdinlogo" className="img1" />
            </div>
          </div>
        </div>
        <div className="level3">
          <p>2021@Laundry</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
