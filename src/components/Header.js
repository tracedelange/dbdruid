import React from "react";
import { Link } from "react-router-dom";
import reubeen from "../assets/Reuben-HD.png";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-second-row" style={{width: '40%'}}>
        {/* <img className="header-logo" src={reubeen} alt='logo' /> */}
        <h2>dbdruid</h2>
      </div>
      <div className="header-second-row">
        <Link to="/">Home</Link>
        <Link to="blogs">Blog</Link>
        <Link to="reubeen">Reubeen</Link>
        {/* <Link to="about">About</Link> */}
      </div>
      <div className="footer-divider" style={{ marginTop: "2%" }}></div>
    </div>
  );
};

export default Header;
