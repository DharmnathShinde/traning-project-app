import React from 'react';
import "../App.css"
import { NavLink } from 'react-router-dom';

function Head() {
  return (
    <div className='grid Head'>
      <h1>Logo</h1>
      <ul  className='grid listitems'>
        <NavLink
        to={"/"} className="navlink"><li>Home</li></NavLink>
        <NavLink to={"/post"} className="navlink" ><li>Post</li></NavLink>
        <NavLink to={"/photos"} className="navlink"><li>Photos</li></NavLink>
        <NavLink to={"/"} className="navlink"><li>User</li></NavLink>
      </ul>
    </div>
  )
}

export default Head
