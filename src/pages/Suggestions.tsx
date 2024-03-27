// Suggestions.js
import React from "react";
import styles from "./styles/Suggestions.module.css";
import SuggestionForm from "../components/layout/SuggestionForm";
import { Modal, Box } from "@mui/material";

interface BookSuggestion {
  username: string;
  bookname: string;
  description: string;
  type: string; // Opcional, caso nem todas as sugestões tenham uma data
}

function Suggestions() {
  const [showForm, setShowForm] = React.useState(false);
  const [bookSuggestions, setBookSuggestions] = React.useState<
    BookSuggestion[]
  >([]);

  React.useEffect(() => {
    const fetchBookSuggestions = async () => {
      try {
        await fetch("http://localhost:3333/list")
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

  const handleClose = () => setShowForm(false);

  // Estilo para o modal
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    outline: "none", // Remove o contorno padrão que alguns browsers aplicam
  };

  return (
    <div className={styles.page}>
      <h1>Sugestões de Livros</h1>
      {bookSuggestions.map((suggestion, index) => (
        <div
          className={`${styles.suggestionsContainer} ${
            index !== 0 ? styles.suggestionsContainerSecond : ""
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
        <button onClick={() => setShowForm(true)}>Dar uma sugestão</button>
        <Modal
          open={showForm}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <SuggestionForm />
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default Suggestions;
