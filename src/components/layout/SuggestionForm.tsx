import React from "react";
import styles from "./styles/SuggestionForm.module.css";

//Definição de tipo
type FormState = {
  username: string;
  bookname: string;
  description: string;
  type: string; // Adicionando o novo campo
};

function SuggestionForm() {
  const [formData, setFormData] = React.useState<FormState>({
    username: "",
    bookname: "",
    description: "",
    type: "",
  });

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(formData.username);
  };

  return (
    <form>
      <div className={styles.container}>
        <label htmlFor="type">Tipo:</label>
        <select
          id="type"
          name="type"
          value={formData.type}
          onChange={handleChange}
          className={styles.input} // Aplique estilos conforme necessário
        >
          <option value="">Selecione uma opção</option>
          <option value="Livro">Livro</option>
          <option value="Filme">Filme</option>
          <option value="Artigo">Artigo</option>
          <option value="Dissertação">Dissertação</option>
        </select>
        <label htmlFor="name"> Seu nome:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <label htmlFor="bookname"> Nome do Livro/Artigo:</label>
        <input
          type="text"
          id="bookname"
          name="bookname"
          value={formData.bookname}
          onChange={handleChange}
        />
        <label htmlFor="description">Fale um pouco sobre o livro:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
    </form>
  );
}

export default SuggestionForm;
