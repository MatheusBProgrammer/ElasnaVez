// Biography.js
import styles from "./styles/Biography.module.css";

function Biography() {
  return (
    <div className={styles.page}>
      <h1>Livros para download</h1>
      <div className={styles.container}>
        <div className={styles.biography}>
          <h2>Dicionário: Mulheres do Brasil</h2>
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
          <h2>Mulheres do Brasil: A história não contada</h2>
          <p>
            A história não contada resgata a história de mais de 200 mulheres
            das mais variadas épocas que tiveram suas biografias alteradas,
            deturpadas ou que simplesmente sequer apareceram nos registros
            convencionais. Depois de desmistificar as figuras dos imperadores d.
            Pedro I e d. Leopoldina, o escritor e pesquisador Paulo Rezzutti se
            dedica a mulheres conhecidas ou ignoradas pela história do Brasil:
            das guerreiras às vilãs, das mulheres do poder a artistas. Também
            ilumina trajetórias pouco conhecidas de indígenas e negras
            escravizadas e avança até os dias atuais, com mulheres como Marielle
            Franco, a vereadora carioca assassinada em março de 2018 por "ousar"
            não ser invisível. O livro chega num momento em que a discussão
            sobre o papel das mulheres na sociedade se intensifica,
            surpreendendo o leitor ao reapresentar acontecimentos da história do
            Brasil com as personagens femininas finalmente reinseridas nos
            papeis de destaque que lhes foram negados pela narrativa oficial.
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
