import { useState } from "react";
import styles from "./styles/Navbar.module.css";
import { IoMdMenu } from "react-icons/io";
import { useSpring, animated } from "@react-spring/web";

interface SectionRefs {
  [key: string]: React.RefObject<HTMLDivElement>;
}

interface NavbarProps {
  scrollToRef: SectionRefs;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToRef }) => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  const props = useSpring({
    reset: true,
    from: { opacity: 0 },
    to: { opacity: showSubMenu ? 1 : 0 },
  });

  const handleScrollToRef = (refName: keyof SectionRefs) => () => {
    const ref = scrollToRef[refName];
    ref?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.container}>
      <div className={styles.menu} onClick={toggleSubMenu}>
        <IoMdMenu />
      </div>
      {showSubMenu && (
        <animated.div style={props} className={styles.submenu}>
          {/* Ajuste as ações para cada submenu se necessário */}
          <div onClick={handleScrollToRef("section1")}>SubSeção 1</div>
          <div onClick={handleScrollToRef("section2")}>SubSeção 2</div>
          <div onClick={handleScrollToRef("section3")}>SubSeção 3</div>
          <div onClick={handleScrollToRef("section4")}>SubSeção 4</div>
          <div onClick={handleScrollToRef("section5")}>SubSeção 5</div>
        </animated.div>
      )}
      <div
        onClick={handleScrollToRef("welcomeRef")}
        className={styles.navbarItem}
      >
        Apresentação
      </div>
      {/* Os links abaixo podem ser ajustados de forma semelhante, se necessário */}
    </div>
  );
};

export default Navbar;
