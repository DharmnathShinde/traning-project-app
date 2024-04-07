import React from "react";
import { NavLink } from "react-router-dom"; // Ensure NavLink is imported
import "../App.css"; // Assuming you're using App.css for your styles

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-nav">
        <div><h1>Logo</h1>
        <h6>All right reseved by ... </h6>
        </div>
        <ul className="grid listitems2">
          <NavLink to={"/"} className="navlink">
            <li>Home</li>
          </NavLink>
          <NavLink to={"/post"} className="navlink">
            <li>Post</li>
          </NavLink>
          <NavLink to={"/photos"} className="navlink">
            <li>Photos</li>
          </NavLink>
          <NavLink to={"/user"} className="navlink">
            <li>User</li>
          </NavLink>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
