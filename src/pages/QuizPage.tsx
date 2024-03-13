import React from "react";
import styles from "./styles/QuizPage.module.css";
import QuizComponent from "../components/layout/QuizComponent";

function QuizPage() {
  return (
    <div className={styles.page}>
      <QuizComponent />
    </div>
  );
}

export default QuizPage;
