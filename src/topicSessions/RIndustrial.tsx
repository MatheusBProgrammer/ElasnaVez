import React from "react";
import styles from "./styles/general.module.css";
import revolucaoindustrialimg from "../assets/imgs/revolucaoindustrialimg.jpg";
import mary from "../assets/imgs/mary.jpg";
import sarah from "../assets/imgs/sarah.jpg";
import AnimatedPage from "../components/animations/AnimatedPage";

function RIndustrial() {
  const [showInfo, setShowInfo] = React.useState<number | null>(null);
  const [showMore, setShowMore] = React.useState<number | null>(null);

  React.useEffect(() => {}, [showInfo, showMore]);
  const subTopicImages = [
    { src: mary, name: "Mary Wollstonecraft" },
    { src: sarah, name: "Sarah Guppy " },
  ];

  const informacoes = [
    {
      name: "Mary Wollstonecraft",
      article: `Mary Wollstonecraft é mais conhecida por seu trabalho pioneiro em defesa dos direitos das mulheres, "A Vindication of the Rights of Woman" (1792), que ela escreveu em resposta aos rápidos desenvolvimentos sociais e econômicos da Revolução Industrial e da Revolução Francesa. Wollstonecraft argumentava que as mulheres não eram naturalmente inferiores aos homens, mas pareciam ser apenas por falta de educação. Ela defendia a igualdade de educação para mulheres e homens, acreditando que isso era essencial para a sociedade se desenvolver plenamente e para as mulheres participarem ativamente da economia emergente.

Wollstonecraft não apenas abordou questões de gênero, mas também criticou as estruturas de classe da época, argumentando que a educação deveria ser acessível a todas as camadas da sociedade. Seu trabalho teve um profundo impacto no movimento pelos direitos das mulheres e na luta por reformas educacionais, ecoando até hoje.`,
    },
    {
      name: "Sarah Guppy",
      article: `Sarah Guppy foi uma inventora inglesa cujas inovações tiveram um impacto significativo durante a Revolução Industrial. Embora muitas vezes esquecida pela história, suas contribuições para a engenharia e a infraestrutura foram fundamentais. Guppy detém a distinção de ser uma das primeiras mulheres na Inglaterra a obter uma patente, em 1811, por um método de construir e melhorar pontes. Este método foi crucial para a construção de pontes mais seguras e eficientes, facilitando o transporte de mercadorias e pessoas, um componente vital para o avanço da Revolução Industrial.

Além disso, Guppy inventou um sistema para proteger navios de madeira contra o ataque de vermes marinhos, bem como contribuições para a agricultura, incluindo um dispositivo para economizar sementes ao plantar milho. Suas invenções refletem não apenas seu gênio técnico, mas também seu compromisso em responder às necessidades emergentes de uma sociedade em rápida transformação.`,
    },
  ];

  return (
    <div className={styles.generalInfo}>
      <div>
        <section>
          <h1>Revolução Industrial</h1>
          <img src={revolucaoindustrialimg} alt="BrasilColonia.png" />
          <p>
            A Revolução Industrial, iniciada no século XVIII na Grã-Bretanha,
            foi uma transformação profunda dos processos de produção. Este
            período marcou a transição de métodos artesanais para a produção
            mecanizada, influenciando profundamente as estruturas sociais,
            econômicas e culturais em nível global. As inovações tecnológicas,
            como a máquina a vapor e o tear mecânico, impulsionaram a eficiência
            da produção, o desenvolvimento de fábricas e a urbanização,
            redefinindo o trabalho e a sociedade.
          </p>
          <h3>Inovações Tecnológicas</h3>
          <p>
            As inovações foram o cerne da Revolução Industrial, destacando-se a
            invenção da máquina a vapor por James Watt, o desenvolvimento do
            tear mecânico e a introdução da siderurgia moderna. Essas
            tecnologias não apenas aumentaram a produção industrial mas também
            impulsionaram o transporte, com a construção de ferrovias e o
            aprimoramento da navegação a vapor.
          </p>
          <h3>Impacto Social</h3>
          <p>
            O impacto social da Revolução Industrial foi imenso, alterando a
            composição da sociedade e as relações de trabalho. A urbanização
            acelerada, o surgimento da classe trabalhadora e as mudanças nas
            condições de trabalho levantaram questões sobre direitos
            trabalhistas, dando origem a movimentos operários e sindicais.
          </p>
          <h3>Mudanças Econômicas</h3>
          <p>
            Economicamente, a Revolução Industrial impulsionou o capitalismo
            industrial, caracterizado pela concentração da produção, o
            crescimento do comércio internacional e o surgimento de novos
            mercados. A expansão das indústrias e a necessidade de
            matérias-primas também estimularam o imperialismo e a colonização.
          </p>
          <h3>Contribuição das Mulheres</h3>
          <p>
            As mulheres desempenharam um papel crucial durante a Revolução
            Industrial, especialmente como força de trabalho nas fábricas. Suas
            contribuições, muitas vezes em condições de trabalho precárias e por
            salários inferiores aos dos homens, foram fundamentais para o
            desenvolvimento industrial. A participação feminina também estimulou
            debates sobre direitos trabalhistas e igualdade de gênero.
          </p>
          <h4>Mulheres no Trabalho Fabril</h4>
          <p>
            A presença feminina nas fábricas era significativa, principalmente
            em setores como o têxtil, onde suas habilidades eram altamente
            valorizadas. Apesar das duras condições de trabalho, as mulheres
            demonstraram resiliência e capacidade de adaptação, contribuindo de
            forma indispensável para a economia industrial.
          </p>
          <h4>Mulheres e Movimentos Sociais</h4>
          <p>
            As mulheres não apenas participavam da força de trabalho industrial,
            mas também se envolviam ativamente em movimentos sociais e
            sindicais, lutando por melhores condições de trabalho, salários
            justos e direitos igualitários. Sua participação nesses movimentos
            foi essencial para trazer à tona questões de justiça social e
            trabalhista.
          </p>
          <h4>Impacto na Família e Sociedade</h4>
          <p>
            A Revolução Industrial também afetou a estrutura familiar e as
            relações sociais. Com as mulheres trabalhando fora, houve mudanças
            nos papéis tradicionais de gênero, desafiando as normas sociais e
            contribuindo para as discussões sobre direitos das mulheres e
            igualdade de gênero.
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

export default RIndustrial;
