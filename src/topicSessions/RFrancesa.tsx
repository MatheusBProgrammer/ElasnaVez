import React from "react";
import styles from "./styles/general.module.css";
import revolucaofrancesaimg from "../assets/imgs/revolucaofrancesaimg.jpg";
import charlotte from "../assets/imgs/charlotte.png";
import olympe from "../assets/imgs/olympe.png";
import AnimatedPage from "../components/animations/AnimatedPage";

function RFrancesa() {
  const [showInfo, setShowInfo] = React.useState<number | null>(null);
  const [showMore, setShowMore] = React.useState<number | null>(null);

  React.useEffect(() => {}, [showInfo, showMore]);
  const subTopicImages = [
    { src: charlotte, name: "Charlotte Corday" },
    { src: olympe, name: "Olympe de Gouges" },
  ];

  const informacoes = [
    {
      name: "Charlotte",
      article: `Charlotte Corday é mais conhecida por seu assassinato de Jean-Paul Marat, uma figura proeminente do radicalismo revolucionário, em 1793. Corday era uma simpatizante dos girondinos, um grupo político moderado que foi eventualmente suplantado pelos jacobinos mais radicais. Ela acreditava que a morte de Marat, responsável por incitar a violência e o terror, poderia ajudar a acabar com a fase mais sangrenta da Revolução Francesa e restaurar a paz e a estabilidade na França.

O ato de Corday, embora extremo, destaca o papel ativo que algumas mulheres estavam dispostas a assumir em questões políticas durante a revolução. Após assassinar Marat em seu banho, Corday foi rapidamente presa, julgada e guilhotinada. Ela é frequentemente lembrada como uma figura trágica, cujas ações refletem as tensões e os extremos da Revolução Francesa.`,
    },
    {
      name: "Olympe",
      article: `Olympe de Gouges foi uma dramaturga, ativista política e feminista francesa cuja obra mais conhecida, a "Declaração dos Direitos da Mulher e da Cidadã" de 1791, desafiou diretamente as noções predominantes de gênero e igualdade da época. Neste documento, ela expandiu os ideais da Revolução Francesa – liberdade, igualdade e fraternidade – para incluir mulheres, argumentando que elas também deveriam ter direitos políticos e sociais iguais aos dos homens. De Gouges foi uma crítica vocal da escravidão e da opressão das mulheres, utilizando sua escrita para advogar por uma sociedade mais justa e igualitária.

Apesar de sua contribuição significativa para os ideais revolucionários, de Gouges enfrentou oposição feroz por suas visões, particularmente por seu apoio à monarquia constitucional e por seus escritos que criticavam o radicalismo revolucionário. Em 1793, ela foi acusada de sedição pela facção radical no poder e guilhotinada, tornando-se uma mártir para os futuros movimentos feministas.`,
    },
  ];

  return (
    <div className={styles.generalInfo}>
      <div>
        <section>
          <h1>Revolução Francesa</h1>
          <img src={revolucaofrancesaimg} alt="BrasilColonia.png" />
          <p>
            A Revolução Francesa, um dos eventos mais significativos da história
            mundial, ocorreu entre 1789 e 1799. Este período revolucionário
            alterou profundamente o curso da história francesa, derrubando a
            monarquia, estabelecendo a República Francesa e culminando no
            reinado de terror sob Robespierre. Foi marcado por uma radical
            reorganização social e política, impulsionada por ideais de
            liberdade, igualdade e fraternidade. Suas consequências não se
            limitaram à França, influenciando as esferas política, social e
            econômica em todo o mundo.
          </p>
          <h3>Causas da Revolução</h3>
          <p>
            As causas da Revolução Francesa foram multifacetadas, incluindo
            crises econômicas, desigualdades sociais, o descontentamento da
            classe trabalhadora, e o exemplo inspirador da Revolução Americana.
            A falência do governo francês e a insistência em manter uma
            sociedade estamental injusta também contribuíram para o
            descontentamento geral que levou à revolução.
          </p>
          <h3>Eventos Principais</h3>
          <p>
            A queda da Bastilha em 14 de julho de 1789 é frequentemente citada
            como o início da Revolução Francesa. Outros eventos significativos
            incluem a Declaração dos Direitos do Homem e do Cidadão, a execução
            de Luís XVI e o período do Terror, que viu milhares de supostos
            contra-revolucionários guilhotinados.
          </p>
          <h3>Impacto Global</h3>
          <p>
            A Revolução Francesa teve um impacto profundo além de suas
            fronteiras, inspirando revoluções em todo o mundo e levando à
            disseminação de ideais republicanos e democráticos. Seu legado
            inclui a promoção dos direitos humanos e o questionamento da
            legitimidade do poder absoluto e da monarquia hereditária.
          </p>
          <h3>Contribuição das Mulheres</h3>
          <p>
            As mulheres desempenharam papéis cruciais durante a Revolução
            Francesa, tanto na linha de frente dos protestos quanto no debate
            intelectual sobre os direitos das mulheres. A Marcha sobre Versalhes
            e a participação ativa nas sociedades revolucionárias destacam a
            importância da ação feminina no processo revolucionário.
          </p>
          <h4>Mulheres na Política</h4>
          <p>
            As mulheres lutaram por sua voz política, com figuras como Olympe de
            Gouges, que escreveu a Declaração dos Direitos da Mulher e da
            Cidadã, desafiando diretamente as noções de que a liberdade e
            igualdade deveriam ser reservadas apenas aos homens.
          </p>
          <h4>Mulheres e Mobilização Social</h4>
          <p>
            Através de clubes, jornais e participação ativa nos protestos e
            marchas, as mulheres exerceram influência significativa. Elas não
            apenas lutaram por mudanças sociais e políticas, mas também por seus
            próprios direitos, marcando o início do movimento feminista na
            França.
          </p>
          <h4>Legado das Mulheres</h4>
          <p>
            Apesar de enfrentarem repressão e exclusão da vida política
            pós-revolucionária, as mulheres da Revolução Francesa estabeleceram
            um precedente para futuras gerações na luta por igualdade de gênero
            e direitos civis, contribuindo significativamente para o legado
            duradouro da revolução na promoção dos direitos humanos.
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

export default RFrancesa;
