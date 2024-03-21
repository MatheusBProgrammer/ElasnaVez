import { useState } from "react";
import styles from "./styles/Navbar.module.css";
import { IoMdMenu } from "react-icons/io";
import { useSpring, animated } from "@react-spring/web";

interface SectionRefs {
  //criando referencia para o props recebido em App.tsx, que são Objetos de referencia(useRef)
  //[key: string]: React.RefObject<HTMLDivElement>;
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
    toggleSubMenu;
  };

  return (
    <div className={styles.container}>
      <div className={styles.menu} onClick={toggleSubMenu}>
        <IoMdMenu />
      </div>

      {
        //INÍCIO SUBMENU
        showSubMenu && (
          <animated.div style={props} className={styles.submenu}>
            {/* Ajuste as ações para cada submenu se necessário */}
            <div onClick={handleScrollToRef("welcomeRef")}>
              Elas na vez
            </div>{" "}
            <div onClick={handleScrollToRef("homeRef")}>O Projeto</div>{" "}
            <div onClick={handleScrollToRef("timelineRef")}>
              As Mulheres na História
            </div>{" "}
            <div onClick={handleScrollToRef("quizRef")}>Quiz</div>{" "}
          </animated.div>
          //FIM SUBMENU
        )
      }
      <div
        onClick={handleScrollToRef("welcomeRef")}
        className={styles.navbarItem}
      >
        <p> Elas na vez</p>{" "}
      </div>
      <div onClick={handleScrollToRef("homeRef")} className={styles.navbarItem}>
        <p>O Projeto</p>{" "}
      </div>
      <div
        onClick={handleScrollToRef("timelineRef")}
        className={styles.navbarItem}
      >
        <p> As Mulheres na História</p>{" "}
      </div>
      <div onClick={handleScrollToRef("quizRef")} className={styles.navbarItem}>
        <p> Quiz</p>{" "}
      </div>
      {/* Os links abaixo podem ser ajustados de forma semelhante, se necessário */}
    </div>
  );
};

export default Navbar;
