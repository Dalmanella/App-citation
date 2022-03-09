import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import {FaBars} from "react-icons/fa"
import { MdClose } from "react-icons/md"



const links = [
  {
    id: 1,
    path: "/*",
    text: "GENERATEUR",
  },
  {
    id: 2,
    path: "/dico",
    text: "DICO",
  },
  {
    id: 3,
    path: "/apropos",
    text: "A PROPOS",
  },
  
]

const Navbar = () => {

  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeMenu = ()=> {
    setNavbarOpen(false);
  }

return (
  <nav className="navBar">
    <button 
        onClick={handleToggle} 
        style={{ backgroundColor: "orange", borderRadius:"5px", borderColor:"orange"}}
    >

        {navbarOpen ? (
        <MdClose style={{ color: "darkred", width: "40px", height: "40px" }} />
        ) : (
        <FaBars style={{ color: "rgb(44, 102, 52)", backgroundColor:"orange", width: "40px", height: "40px" }} />
        )}
    </button>

    <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
      {links.map(link => {
        return (
          <li key={link.id}>
            <NavLink to={link.path} onClick={() => closeMenu()} >
              {link.text}
            </NavLink>
          </li>
        )
      })}
    </ul>
  </nav>
)}
export default Navbar;