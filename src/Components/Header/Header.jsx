// import React from 'react'
// import { FaHome } from "react-icons/fa";
// import { FaRegUser } from "react-icons/fa";
// import { FaFireAlt } from "react-icons/fa";


// const Header = () => {
//   return (
//     <header className='header'>
//         <nav className='nav container'>
//             <a href='index.html'>YASH</a>
//             <div className="nav-Menu">
//                 <ul className='nav-menu-list'>
//                     <li className='nav-item'>
//                         <a href="" className='nav-link'>
//                             <FaHome />  Home  
//                         </a>
//                     </li>

//                     <li className='nav-item'>
//                         <a href="" className='nav-link'>
//                         <FaRegUser />   About
//                         </a>
//                     </li>

//                     <li className='nav-item'>
//                         <a href="" className='nav-link'>
//                         <FaFireAlt />  Skills 
//                         </a>
//                     </li>


//                 </ul>
//             </div>
//         </nav>
      
//     </header>
//   )
// }

// export default Header


import React, { useState } from "react";

import styles from "./header.module.css";
import { getImageUrl } from "../../utils";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;