import React from "react";
import styles from "./styles/Home.module.css";
import AnimatedPage from "../components/animations/AnimatedPage";

function Home() {
  return (
    <AnimatedPage>
      <div className={styles.container}></div>
    </AnimatedPage>
  );
}

export default Home;
