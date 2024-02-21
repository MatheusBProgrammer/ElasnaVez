import React, { useState } from "react";
import styles from "./styles/Navbar.module.css";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";

function Navbar() {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  return (
    <div className={styles.container}>
      <div className={styles.menu} onClick={toggleSubMenu}>
        <IoMdMenu />
      </div>
      {showSubMenu && (
        <div className={styles.submenu}>
          <Link to="/section1">SubSeção 1</Link>
          <Link to="/section2">SubSeção 2</Link>
          <Link to="/section3">SubSeção 3</Link>
          <Link to="/section4">SubSeção 4</Link>
          <Link to="/section5">SubSeção 5</Link>
        </div>
      )}
      <Link to="/home">Home</Link>
      <Link to="/home">Seção 1</Link>
      <Link to="/home">Seção 2</Link>
      <Link to="/home">Seção 3</Link>
      <Link to="/home">Seção 4</Link>
      <Link to="/sobre">Sobre</Link>
    </div>
  );
}

export default Navbar;
