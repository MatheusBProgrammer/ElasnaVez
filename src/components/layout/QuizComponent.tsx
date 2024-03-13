// Arquivo: QuizComponent.tsx
import React, { useState } from "react";
import Questions from "../../assets/quiz/Questions";
import styles from "./styles/QuizComponent.module.css";

const QuizComponent: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [showScore, setShowScore] = useState<boolean>(false);

  const handleAnswerButtonClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < Questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.header}>Quiz</div>

      <div className={styles.quiz}>
        {showScore ? (
          <div className={styles.scoreSection}>
            Você acertou {score} de {Questions.length} perguntas!
          </div>
        ) : (
          <div>
            <div className={styles.questionSection}>
              <div className={styles.questionCount}>
                <span>Pergunta {currentQuestion + 1}</span>/{Questions.length}
              </div>
              <div className={styles.questionText}>
                {Questions[currentQuestion].pergunta}
              </div>
            </div>
            <div className={styles.answerSection}>
              {Questions[currentQuestion].alternativas.map(
                (answerOption: string, index: React.Key | null | undefined) => (
                  <div
                    className={styles.button}
                    onClick={() =>
                      handleAnswerButtonClick(
                        index?.toString() ===
                          Questions[currentQuestion].respostaCorreta
                      )
                    }
                    key={index}
                  >
                    {answerOption}
                  </div>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizComponent;
