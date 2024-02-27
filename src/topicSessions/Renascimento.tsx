import React from "react";
import styles from "./styles/general.module.css";
import renascimento from "../assets/imgs/renascimentoimg.jpg";
import isabel from "../assets/imgs/isabel.jpg";
import artemisia from "../assets/imgs/artemisia.jpg";
import AnimatedPage from "../components/animations/AnimatedPage";

function Renascimento() {
  const [showInfo, setShowInfo] = React.useState<number | null>(null);
  const [showMore, setShowMore] = React.useState<number | null>(null);

  React.useEffect(() => {}, [showInfo, showMore]);
  const subTopicImages = [
    { src: isabel, name: "Isabella d'Este" },
    { src: artemisia, name: "Artemisia Gentileschi" },
  ];

  const informacoes = [
    {
      name: "Isabella d'Este",
      article: `Conhecida como a "Primeira Dama do Renascimento", Isabella d'Este, Marquesa de Mântua, foi uma patrona das artes e uma líder política influente. Sua corte foi um centro para artistas e intelectuais. Isabella não só apoiou financeiramente muitos artistas renomados, mas também participou ativamente de debates intelectuais e colecionou uma das mais importantes bibliotecas e galerias de arte de sua época.`,
    },
    {
      name: "Artemisia Gentileschi",
      article: `Artemisia Gentileschi é uma das pintoras mais aclamadas do período barroco, conhecida por suas representações dramáticas e sua técnica excepcional. Suas obras frequentemente retratam temas de mulheres fortes e desafiantes, refletindo talvez suas próprias experiências de vida, incluindo sua luta contra as convenções de gênero de seu tempo.`,
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
          <h4>Figuras femininas de Destaque do Renascimento</h4>
          <p>
            O Renascimento Europeu, um período de profunda renovação cultural,
            artística, política e científica que se estendeu aproximadamente do
            século XIV ao XVII, é frequentemente lembrado pelos feitos de
            figuras masculinas proeminentes como Leonardo da Vinci,
            Michelangelo, e Galileu Galilei. No entanto, este período também foi
            marcado pela contribuição significativa de mulheres notáveis que,
            apesar das restrições sociais e educacionais impostas pelo gênero,
            conseguiram influenciar e participar ativamente das mudanças
            culturais, artísticas e intelectuais de sua época.
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
