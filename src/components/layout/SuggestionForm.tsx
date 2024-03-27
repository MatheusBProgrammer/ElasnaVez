import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import styles from "./styles/SuggestionForm.module.css"; // Importando o CSS Module

type FormState = {
  username: string;
  bookname: string;
  description: string;
  type: string;
};

function SuggestionForm() {
  const [formData, setFormData] = React.useState<FormState>({
    username: "",
    bookname: "",
    description: "",
    type: "",
  });

  const handleSelectChange = (event: SelectChangeEvent) => {
    const name = event.target.name;
    const value = event.target.value;
    if (name) {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form>
      <div className={styles.container}>
        {" "}
        {/* Aplica o estilo do container */}
        <FormControl fullWidth className={styles.MuiFormControlRoot}>
          <InputLabel id="type-label">Tipo:</InputLabel>
          <Select
            labelId="type-label"
            id="type"
            name="type"
            value={formData.type}
            label="Tipo"
            onChange={handleSelectChange}
            className={styles.MuiFormControlRoot} // Aplica o estilo ao Select
          >
            <MenuItem value="">
              <em>Nenhum</em>
            </MenuItem>
            <MenuItem value="Livro">Livro</MenuItem>
            <MenuItem value="Filme">Filme</MenuItem>
            <MenuItem value="Artigo">Artigo</MenuItem>
            <MenuItem value="Dissertação">Dissertação</MenuItem>
          </Select>
        </FormControl>
        {/* Repetindo o uso de className para cada TextField */}
        <TextField
          id="username"
          name="username"
          label="Seu nome"
          variant="outlined"
          value={formData.username}
          onChange={handleChange}
          fullWidth
          className={styles.MuiTextFieldRoot}
        />
        <TextField
          id="bookname"
          name="bookname"
          label="Nome do Livro/Artigo"
          variant="outlined"
          value={formData.bookname}
          onChange={handleChange}
          fullWidth
          className={styles.MuiTextFieldRoot}
        />
        <TextField
          id="description"
          name="description"
          label="Fale um pouco sobre o livro"
          multiline
          rows={4}
          variant="outlined"
          value={formData.description}
          onChange={handleChange}
          fullWidth
          className={styles.MuiTextFieldRoot}
        />
      </div>
    </form>
  );
}

export default SuggestionForm;
