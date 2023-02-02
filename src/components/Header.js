import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <h2>
        dbdruid
      </h2>
      <div className='header-second-row'>
        <Link to="/">Home</Link>
        <Link to="blogs">Blog</Link>
        <Link to="reubeen">Reubeen</Link>
        {/* <Link to="about">About</Link> */}
      </div>
      <div style={{width:'80%', border: '1px solid #2E1C2B', marginTop: '2%'}}></div>
    </div>
  );
};

export default Header;
