import React from "react";
import styles from "./styles/TimeLine.module.css";
import AnimatedPage from "../components/animations/AnimatedPage";
function TimeLine() {
  return (
    <AnimatedPage>
      <div className={styles.container}></div>
    </AnimatedPage>
  );
}

export default TimeLine;
