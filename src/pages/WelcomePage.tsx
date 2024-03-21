import styles from "./styles/WelcomePage.module.css";
import womansLogo from "../assets/imgs/womansLogo.png";
import AnimatedPage from "../components/animations/AnimatedPage";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { useSpring, animated } from "react-spring";

function WelcomePage() {
  //configurando a animação
  const propsLeft = useSpring({
    from: {
      x: -200,
    },
    to: {
      x: 0,
    },
    config: {
      mass: 5,
      friction: 100,
      tension: 300,
    },
  });
  const propsRight = useSpring({
    from: {
      x: 200,
    },
    to: {
      x: 0,
    },
    config: {
      mass: 5,
      friction: 100,
      tension: 300,
    },
  });

  const propsBottom = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    config: {
      duration: 1000,
    },
  });

  function handleScroll() {
    window.scrollBy({
      top: window.innerHeight,
      left: 50,
      behavior: "smooth", // Rola suavemente
    });
  }
  return (
    <AnimatedPage>
      <div className={styles.container}>
        <animated.div style={propsLeft}>
          <div className={styles.headerContainer}>
            <h1>Elas na Vez</h1>

            <div className={styles.headerParagraph}>
              Na história e nos livros: lugar de mulher é onde ela quiser!
            </div>
          </div>{" "}
        </animated.div>
        <animated.div style={propsBottom}>
          <div className={styles.headerArrowDown}>
            Conheça nosso Site!
            <BsFillArrowDownCircleFill onClick={handleScroll} />
          </div>
        </animated.div>
        <animated.div style={propsRight}>
          <div className={styles.headerImage}>
            <img src={womansLogo} />
          </div>
        </animated.div>
      </div>
    </AnimatedPage>
  );
}

export default WelcomePage;
