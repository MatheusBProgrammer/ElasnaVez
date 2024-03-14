// Arquivo: QuizComponent.tsx
import React, { useState } from "react";
import Questions from "../../assets/quiz/Questions";
import styles from "./styles/QuizComponent.module.css";

const QuizComponent: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [showScore, setShowScore] = useState<boolean>(false);
  const [headerText, setHeaderText] = useState<string>(
    "Hora de testar os seus conhecimentos"
  );

  const messagesStatus = {
    sucessMessages: [
      "Eita, você é bom mesmo! 🌟",
      "Acertou em cheio! 💫",
      "Não é que você sabe mesmo? 😎",
      "Você está arrasando! 🔥",
      "Isso aí! Na mosca! 🎯",
    ],
    failureMessages: [
      "Ops, quase lá! Tente outra vez. 🙈",
      "Errou, mas não desanime! 🌈",
      "Não foi dessa vez... Mas siga em frente! 💪",
      "Ahhh, quase acertou! Mantenha o ânimo! 🚀",
      "Errou, mas aprendemos com os erros, né? 📚",
    ],
  };

  const handleAnswerButtonClick = (isCorrect: boolean) => {
    let message;
    if (isCorrect) {
      setScore(score + 1);
      message =
        messagesStatus.sucessMessages[
          Math.floor(Math.random() * messagesStatus.sucessMessages.length)
        ];
    } else {
      message =
        messagesStatus.failureMessages[
          Math.floor(Math.random() * messagesStatus.failureMessages.length)
        ];
    }

    setHeaderText(message);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < Questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      setHeaderText("Acabou!");
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.header}>{headerText}</div>

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
