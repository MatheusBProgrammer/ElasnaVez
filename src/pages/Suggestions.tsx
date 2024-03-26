// Suggestions.js
import React from "react";
import styles from "./styles/Suggestions.module.css";
import SuggestionForm from "../components/layout/SuggestionForm";
import AnimatedPage from "../components/animations/AnimatedPage";

function Suggestions() {
  const [showForm, setShowForm] = React.useState<boolean>(false);

  const bookSuggestions = [
    {
      username: "AnaSilva",
      bookName: "Viagem ao Centro da Terra",
      suggestionDate: "2024-03-20",
      description:
        "Uma aventura emocionante ao centro da Terra. Recomendo para quem ama exploração e mistérios.",
    },
    {
      username: "CarlosFerreira",
      bookName: "O Pequeno Príncipe",
      suggestionDate: "2024-03-18",
      description:
        "Uma história tocante que nos faz refletir sobre o significado da vida e as relações humanas.",
    },
    {
      username: "JuliaM",
      bookName: "1984",
      suggestionDate: "2024-03-15",
      description:
        "Uma distopia assustadora que é incrivelmente relevante no mundo de hoje. Faz pensar sobre liberdade e controle.",
    },
  ];

  return (
    <div className={styles.page}>
      <h1>Sugestões de Livros</h1>
      {bookSuggestions.map((suggestion, index) => (
        <div key={index} className={styles.suggestionItem}>
          <h2>{suggestion.bookName}</h2>
          <p className={styles.suggestionInfo}>
            Sugerido por {suggestion.username}
          </p>
          <p className={styles.suggestionDescription}>
            {suggestion.description}
          </p>
        </div>
      ))}
      <button onClick={() => setShowForm(!showForm)}>Dar uma sugestão</button>
      {showForm && (
        <AnimatedPage>
          <SuggestionForm />
        </AnimatedPage>
      )}
    </div>
  );
}

export default Suggestions;
