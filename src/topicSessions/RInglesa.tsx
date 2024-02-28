import React from "react";
import styles from "./styles/general.module.css";
import revolucaoinglesaimg from "../assets/imgs/revolucaoinglesaimg.jpg";
import anne from "../assets/imgs/anne.jpg";
import lucy from "../assets/imgs/lucy.jpg";
import AnimatedPage from "../components/animations/AnimatedPage";

function RInglesa() {
  const [showInfo, setShowInfo] = React.useState<number | null>(null);
  const [showMore, setShowMore] = React.useState<number | null>(null);

  React.useEffect(() => {}, [showInfo, showMore]);
  const subTopicImages = [
    { src: lucy, name: "Lucy Hutchinson" },
    { src: anne, name: "Lady Anne Fairfax " },
  ];

  const informacoes = [
    {
      name: "Lucy Hutchinson",
      article: `Lucy Hutchinson é mais conhecida por sua obra "Memoirs of the Life of Colonel Hutchinson", um relato detalhado da vida de seu marido, John Hutchinson, que foi um dos signatários da sentença de morte do rei Carlos I. Através de suas memórias, Lucy oferece uma perspectiva íntima e crítica dos eventos da Revolução Inglesa, proporcionando uma das poucas fontes femininas da época sobre a guerra civil.

Além de sua contribuição literária, Lucy Hutchinson foi uma figura intelectual e religiosa proeminente. Ela defendia as ideias puritanas e participava ativamente dos debates religiosos e filosóficos de seu tempo. Seu trabalho não apenas fornece uma visão valiosa dos eventos e do pensamento político da Revolução Inglesa, mas também destaca o papel das mulheres na sustentação ideológica e moral da causa puritana.

`,
    },
    {
      name: "Lady Anne Fairfax ",
      article: `Lady Anne Fairfax, esposa de Thomas Fairfax, o comandante-chefe do exército do Parlamento durante a Guerra Civil Inglesa, é outra figura feminina notável do período. Embora menos documentada do que Lucy Hutchinson, Lady Fairfax exerceu sua influência através de seu status e conexões, apoiando as causas do Parlamento e promovendo a agenda puritana.

Ela é particularmente lembrada por sua intervenção audaciosa na Assembleia dos Oficiais em 1647, onde protestou contra o tratamento dado ao rei capturado, demonstrando sua independência de pensamento e sua disposição para intervir em assuntos políticos. Este ato não apenas reflete a agência política das mulheres da época, mas também sublinha a complexidade das lealdades e das ideologias durante a Revolução Inglesa.`,
    },
  ];

  return (
    <div className={styles.generalInfo}>
      <div>
        <section>
          <h1>Revolução Inglesa</h1>
          <img src={revolucaoinglesaimg} alt="BrasilColonia.png" />
          <p>
            A Revolução Inglesa, ocorrida no século XVII, foi um período de
            intensas mudanças políticas, sociais e religiosas na Inglaterra.
            Este período abrange a Guerra Civil Inglesa (1642-1651), a execução
            do rei Carlos I, o estabelecimento da República sob Oliver Cromwell,
            e a restauração da monarquia em 1660. Foi um conflito entre as
            forças do Parlamento, que buscavam maior participação política e
            limites ao poder real, e os monarquistas, que defendiam o direito
            divino dos reis.
          </p>
          <h3>Guerra Civil e o Commonwealth</h3>
          <p>
            A Guerra Civil Inglesa foi marcada por batalhas sangrentas e
            divisões profundas dentro da sociedade inglesa. A vitória
            parlamentar levou à execução de Carlos I em 1649 e à instauração do
            Commonwealth, uma república governada por Cromwell. Este período
            também viu a conquista da Irlanda e a repressão na Escócia,
            consolidando o controle do Parlamento sobre as Ilhas Britânicas.
          </p>
          <h3>Restauração e Impacto</h3>
          <p>
            A morte de Cromwell em 1658 e o subsequente colapso do Commonwealth
            levaram à Restauração da monarquia em 1660 com o rei Carlos II. Este
            período é notável pelo fortalecimento do Parlamento e pela limitação
            do poder monárquico, estabelecendo precedentes para a futura
            democracia parlamentar na Inglaterra.
          </p>
          <h3>Contribuição das Mulheres</h3>
          <p>
            Apesar de serem excluídas formalmente da política, as mulheres
            desempenharam papéis significativos durante a Revolução Inglesa,
            utilizando-se de panfletos, petições e participação em grupos
            religiosos e políticos para influenciar os acontecimentos e defender
            seus direitos e crenças.
          </p>
          <h4>Papel nas Frentes Doméstica e Política</h4>
          <p>
            Mulheres de todas as classes sociais estavam envolvidas na
            revolução, seja apoiando as tropas com alimentos e cuidados, seja
            ativamente participando de debates políticos e religiosos. Suas
            ações muitas vezes desafiaram as normas tradicionais de gênero da
            época, ampliando suas esferas de influência.
          </p>
          <h4>Mulheres e Literatura</h4>
          <p>
            A revolução proporcionou um espaço para que as mulheres expressassem
            suas opiniões e críticas através da escrita. Autoras e panfletárias
            usaram a pena para discutir questões de igualdade, justiça e
            direitos das mulheres, contribuindo para o debate público e a
            formação da opinião.
          </p>
          <h4>Legado Feminino</h4>
          <p>
            Embora muitas vezes ignoradas pelos registros históricos, as
            contribuições das mulheres à Revolução Inglesa foram fundamentais.
            Elas não apenas apoiaram a causa, mas também lutaram por uma
            sociedade mais igualitária, deixando um legado de resistência e
            participação política que inspirou futuras gerações.
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

export default RInglesa;
