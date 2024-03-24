// Biography.js
import styles from "./styles/Biography.module.css";

function Biography() {
  return (
    <div className={styles.page}>
      <h1>Biografias</h1>
      <div className={styles.container}>
        <div className={styles.biography}>
          <p>
            Com cerca de 900 verbetes e mais de 270 ilustrações, este
            “Dicionário Mulheres do Brasil” torna-se, a partir de agora,
            referência obrigatória para o estudo da história brasileira. De
            Abigail Andrade a ZuZu Angel – passando por Bertha Lutz, Clarice
            Lispector, Escrava Anastácia, Princesa Leopoldina e inúmeras
            mulheres até então atrás dos panos -, são aqui resgatados 500 anos
            de luta e conquista de direitos.
          </p>
          <a
            href="/pdfs/Dicionário Mulheres do Brasil- S. Schumaher.pdf"
            download="Dicionário Mulheres do Brasil - S. Schumaher.pdf"
          >
            Download do PDF
          </a>
        </div>
        <div className={styles.biography}>
          <p>
            NÃO! AS MULHERES NÃO PRECISAM de mais um homem para falar por elas.
            A mulher brasileira tem voz própria há anos. Mas eu gosto de contar
            histórias, e ainda existem histórias a seu respeito que não foram
            contadas ou não foram contextualizadas dentro do espaço em que
            existiram...
          </p>
          <a
            href="/pdfs/Mulheres do Brasil.pdf"
            download="Mulheres do Brasil.pdf"
          >
            Download do PDF
          </a>
        </div>
      </div>
    </div>
  );
}

export default Biography;
