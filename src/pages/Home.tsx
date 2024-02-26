import styles from "./styles/Home.module.css";
import AnimatedPage from "../components/animations/AnimatedPage";
import { useSpring, animated } from "react-spring";

function Home() {
  const propsLeft = useSpring({
    from: { x: -100 },
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
    from: { x: 100 },
    to: {
      x: 0,
    },
    config: {
      mass: 5,
      friction: 100,
      tension: 300,
    },
  });
  const propsCenter = useSpring({
    from: { y: 300 },
    to: {
      y: 0,
    },
    config: {
      mass: 3,
      friction: 90,
      tension: 400,
    },
  });

  return (
    <AnimatedPage>
      <div className={styles.pageElements}>
        <div className={styles.container1}>
          <animated.div style={propsLeft} className={styles.contentLeft}>
            <h2>Caixa 1</h2>
            <p>
              Proin porta, enim in maximus tempor, lectus diam mattis metus, et
              mattis sapien sapien ac nulla. Vestibulum ut nunc et metus viverra
              faucibus. Proin et leo nunc. Nulla facilisi. Aenean nec venenatis
              magna, pharetra consectetur nisi. Morbi a enim at augue convallis
              volutpat et id nunc. Curabitur eu gravida massa. Nunc et elit
              euismod, ultricies arcu at, mollis augue. Donec venenatis mauris
              quis turpis aliquam dignissim. Aliquam erat volutpat. Nullam id
              malesuada est.
            </p>
          </animated.div>
          <animated.div style={propsCenter} className={styles.contentCenter}>
            <h2>Caixa 2</h2>
            <p>
              Proin porta, enim in maximus tempor, lectus diam mattis metus, et
              mattis sapien sapien ac nulla. Vestibulum ut nunc et metus viverra
              faucibus. Proin et leo nunc. Nulla facilisi. Aenean nec venenatis
              magna, pharetra consectetur nisi. Morbi a enim at augue convallis
              volutpat et id nunc. Curabitur eu gravida massa. Nunc et elit
              euismod, ultricies arcu at, mollis augue. Donec venenatis mauris
              quis turpis aliquam dignissim. Aliquam erat volutpat. Nullam id
              malesuada est.
            </p>
          </animated.div>
          <animated.div style={propsRight} className={styles.contentRight}>
            <h2>Caixa 3</h2>
            <p>
              Proin porta, enim in maximus tempor, lectus diam mattis metus, et
              mattis sapien sapien ac nulla. Vestibulum ut nunc et metus viverra
              faucibus. Proin et leo nunc. Nulla facilisi. Aenean nec venenatis
              magna, pharetra consectetur nisi. Morbi a enim at augue convallis
              volutpat et id nunc. Curabitur eu gravida massa. Nunc et elit
              euismod, ultricies arcu at, mollis augue. Donec venenatis mauris
              quis turpis aliquam dignissim. Aliquam erat volutpat. Nullam id
              malesuada est.
            </p>
          </animated.div>
        </div>
        {/** <div className={styles.bottomElements}>
          <div className={styles.bottomIconBox}>
            {" "}
            <GrChat />{" "}
          </div>
        </div>*/}
      </div>
    </AnimatedPage>
  );
}

export default Home;
