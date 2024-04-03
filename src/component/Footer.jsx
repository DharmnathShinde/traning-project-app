import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  const styles={
    list:{
      display:"grid",
      gridTemplateColumns:"1fr 1fr 1fr 1fr"
    }
  }

  return (
    <div>
      <h1>Logo</h1>
      <ul style={styles.list} className='grid listitems'>
        <NavLink
        to={"/"} className="navlink"><li>Home</li></NavLink>
        <NavLink to={"/post"} className="navlink" ><li>Post</li></NavLink>
        <NavLink to={"/photos"} className="navlink"><li>Photos</li></NavLink>
        <NavLink to={"/"} className="navlink"><li>User</li></NavLink>
      </ul>   
      <h6>Comany @2024</h6>
    </div>
  )
}

export default Footer
