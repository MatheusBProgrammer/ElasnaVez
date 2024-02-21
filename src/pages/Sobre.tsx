import React from "react";
import styles from "./styles/Sobre.module.css";
import AnimatedPage from "../components/animations/AnimatedPage";

function Sobre() {
  return (
    <AnimatedPage>
      <div className={styles.container}></div>
    </AnimatedPage>
  );
}

export default Sobre;
