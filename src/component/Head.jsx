import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
import logo from "../Assests/logo.png"
function Head() {
  return (
    <div className="grid Head">
      <img src={logo} alt="" />
      <ul className="grid listitems">
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
  );
}

export default Head;
