import { useState } from "react";
import styles from "./styles/Navbar.module.css";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { useSpring, animated } from "@react-spring/web";

function Navbar() {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  const props = useSpring({
    reset: true,
    from: {
      opacity: 0,
    },
    to: {
      opacity: showSubMenu ? 1 : 0,
    },
  });

  return (
    <div className={styles.container}>
      <div className={styles.menu} onClick={toggleSubMenu}>
        <IoMdMenu />
      </div>
      {showSubMenu && (
        <animated.div style={props} className={styles.submenu}>
          <Link to="/section1">SubSeção 1</Link>
          <Link to="/section2">SubSeção 2</Link>
          <Link to="/section3">SubSeção 3</Link>
          <Link to="/section4">SubSeção 4</Link>
          <Link to="/section5">SubSeção 5</Link>
        </animated.div>
      )}
      <Link to="/" className={styles.navbarItem1}>
        Apresentação
      </Link>
      <Link to="/timeline" className={styles.navbarItem2}>
        Mulheres na História
      </Link>
      <Link to="/quizpage" className={styles.navbarItem3}>
        Quiz
      </Link>

      <Link to="/sobre">Sobre</Link>
    </div>
  );
}

export default Navbar;
