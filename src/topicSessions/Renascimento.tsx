import React from "react";
import styles from "./styles/general.module.css";
import renascimento from "../assets/imgs/renascimentoimg.jpg";
import catarina from "../assets/imgs/catarina.jpg";
import anastacia from "../assets/imgs/anastacia.jpg";
import AnimatedPage from "../components/animations/AnimatedPage";

function Renascimento() {
  const [showInfo, setShowInfo] = React.useState<number | null>(null);
  const [showMore, setShowMore] = React.useState<number | null>(null);

  React.useEffect(() => {}, [showInfo, showMore]);
  const subTopicImages = [
    { src: catarina, name: "Catarina Álvares Paraguaçu" },
    { src: anastacia, name: "Anastácia" },
  ];

  const informacoes = [
    {
      name: "Catarina",
      article:
        "Paraguaçu foi uma indígena tupinambá que teve um papel notável na história do Brasil colonial. Ela foi uma das primeiras indígenas batizadas no cristianismo no Brasil e se casou com o colonizador português Diogo Álvares Correia, conhecido como Caramuru. Sua história é importante por simbolizar as primeiras relações entre europeus e os povos indígenas brasileiros. Paraguaçu é uma figura emblemática, representando tanto a resistência quanto a assimilação e a intermediação cultural entre os indígenas e os portugueses. Ela viajou para a França com Caramuru e lá foi batizada como Catarina Álvares Paraguaçu. Ao retornarem ao Brasil, contribuíram para a fundação da cidade de Salvador, na Bahia.",
    },
    {
      name: "Catarina",
      article:
        "Embora envolta em lendas e mistérios, a figura de Anastácia é um símbolo de resistência contra a escravidão no Brasil. Descrita como uma mulher africana de extraordinária beleza e força de espírito, Anastácia é frequentemente representada com uma máscara de ferro, um instrumento de tortura usado para silenciá-la. Segundo as histórias, ela foi uma escrava que lutou contra a sua condição, resistindo às opressões e abusos dos senhores de escravos. A história de Anastácia se mistura entre a realidade e a lenda, mas ela é venerada como uma santa popular por muitos brasileiros, especialmente na comunidade afro-brasileira, representando a luta pela liberdade e dignidade.",
    },
  ];

  return (
    <div className={styles.generalInfo}>
      <div>
        <section>
          <h1>O Renascimento</h1>
          <img src={renascimento} alt="Renascimento.png" />
          <p>
            O Renascimento foi um movimento cultural que marcou a transição da
            Idade Média para a Modernidade, ocorrendo principalmente entre os
            séculos XIV e XVII na Europa. Caracterizado por um renascimento do
            interesse pelas artes, ciência e filosofia da Antiguidade, este
            período destacou-se pela valorização do humanismo, pela exploração
            de novas técnicas artísticas e pelo avanço significativo do
            conhecimento científico.
          </p>
          <h3>Humanismo e Redescoberta da Antiguidade</h3>
          <p>
            O humanismo renascentista promoveu a redescoberta e estudo dos
            textos clássicos gregos e romanos, enfatizando a dignidade, o
            potencial e o valor do ser humano. Esse movimento filosófico
            influenciou todas as áreas do conhecimento, da literatura às artes,
            moldando uma nova concepção de mundo centrada no indivíduo e na
            natureza.
          </p>
          <h3>Inovações nas Artes</h3>
          <p>
            O Renascimento foi marcado por extraordinários avanços nas artes,
            com o desenvolvimento de técnicas como a perspectiva linear, o
            chiaroscuro (jogo de luz e sombra) e o sfumato. Essas inovações
            permitiram uma representação mais realista do mundo natural e
            humano. Artistas como Leonardo da Vinci, Michelangelo e Rafael são
            alguns dos nomes que definiram o padrão de excelência artística da
            época.
          </p>
          <h3>Revolução Científica</h3>
          <p>
            Paralelamente às artes, o Renascimento também foi um período de
            grandes avanços científicos. A aplicação do método empírico e o
            questionamento das verdades estabelecidas pela Igreja Católica
            levaram a descobertas significativas em várias áreas, como a
            astronomia, com Galileu Galilei; a anatomia, com Andreas Vesalius; e
            a física, com Isaac Newton.
          </p>
          <h3>Explorações Geográficas</h3>
          <p>
            A era do Renascimento coincidiu com a era das grandes explorações
            geográficas, impulsionada pelo desejo de novas rotas comerciais e
            pela curiosidade sobre o mundo. Exploradores como Cristóvão Colombo,
            Vasco da Gama e Fernão de Magalhães expandiram o conhecimento
            geográfico do mundo, desencadeando processos que mudariam o curso da
            história humana.
          </p>
          <h3>Legado do Renascimento</h3>
          <p>
            O legado do Renascimento é imenso, influenciando profundamente o
            desenvolvimento subsequente da cultura ocidental. Seu espírito de
            inquirição e ênfase na observação direta e na racionalidade
            pavimentaram o caminho para a Iluminação e a moderna pesquisa
            científica. As obras de arte produzidas durante este período
            continuam a ser celebradas como algumas das maiores realizações
            humanas.
          </p>
          <h4>Figuras de Destaque do Renascimento</h4>
          <p>
            Além dos já mencionados Leonardo da Vinci, Michelangelo, Rafael,
            Galileu Galilei, e Isaac Newton, o Renascimento também foi
            enriquecido por figuras como Niccolò Machiavelli, na política;
            William Shakespeare, na literatura; e Filippo Brunelleschi, na
            arquitetura. Estes indivíduos, entre outros, contribuíram para um
            período de extraordinária florescência em diversas áreas do
            conhecimento humano.
          </p>
        </section>

        <h2>Mulheres em Destaque:</h2>
        <div className={styles.subTopicsMenu}>
          {subTopicImages.map((image, index) => (
            <div className={styles.topicItem}>
              <img
                src={image.src}
                alt={image.name}
                onMouseEnter={() =>
                  setShowMore(showInfo === index ? null : index)
                }
                onMouseLeave={() => setShowMore(null)}
                onClick={() => {
                  setShowMore(null);
                  setShowInfo(showInfo === index ? null : index);
                }}
              />
              <h5>{image.name}</h5>
              {showMore === index && (
                <div
                  className={styles.more}
                  onClick={() => {
                    setShowMore(null);
                    setShowInfo(showInfo === index ? null : index);
                  }}
                >
                  Mostrar mais...
                </div>
              )}
              {showInfo === index && (
                <AnimatedPage>{informacoes[index].article}</AnimatedPage>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Renascimento;
