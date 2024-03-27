// Suggestions.js
import React from "react";
import styles from "./styles/Suggestions.module.css";
import SuggestionForm from "../components/layout/SuggestionForm";
import AnimatedPage from "../components/animations/AnimatedPage";

// Definindo o tipo para os itens de sugestões de livros
interface BookSuggestion {
  username: string;
  bookname: string;
  description: string;
  type: string; // Opcional, caso nem todas as sugestões tenham uma data
}

function Suggestions() {
  const [showForm, setShowForm] = React.useState(false);
  // Informando ao TypeScript o tipo do estado
  const [bookSuggestions, setBookSuggestions] = React.useState<
    BookSuggestion[]
  >([]);

  React.useEffect(() => {
    const fetchBookSuggestions = async () => {
      try {
        const response = await fetch("http://localhost:3333/list")
          .then((resp) => resp.json())
          .then((data) => {
            setBookSuggestions(data);
          })
          .catch((e) => console.log(e));
      } catch (e) {
        console.log(e);
      }
    };
    fetchBookSuggestions();
  }, []); // O array vazio indica que este efeito roda apenas uma vez, quando o componente é montado.

  return (
    <div className={styles.page}>
      <h1>Sugestões de Livros</h1>
      {bookSuggestions.map((suggestion, index) => (
        <div
          className={`${styles.suggestionsContainer} ${
            index != 0 && styles.suggestionsContainerSecond
          }`}
          key={index}
        >
          <div className={styles.headerSuggestionsContainer}>
            <h2>{suggestion.bookname}</h2>
            <p>Sugerido por {suggestion.username}</p>
          </div>

          <p>{suggestion.description}</p>
        </div>
      ))}
      <div className={styles.bottomSection}>
        <button onClick={() => setShowForm(!showForm)}>Dar uma sugestão</button>
        {showForm && (
          <AnimatedPage>
            <SuggestionForm />
          </AnimatedPage>
        )}
      </div>
    </div>
  );
}

export default Suggestions;
