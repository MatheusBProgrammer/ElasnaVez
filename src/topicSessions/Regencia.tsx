import React from "react";
import styles from "./styles/general.module.css";
import brasilregencial from "../assets/imgs/brasilregencial.jpg";
import quiteria from "../assets/imgs/quiteria.jpg";
import leopoldina from "../assets/imgs/leopoldina.jpg";
import AnimatedPage from "../components/animations/AnimatedPage";

function Regencial() {
  const [showInfo, setShowInfo] = React.useState<number | null>(null);
  const [showMore, setShowMore] = React.useState<number | null>(null);

  React.useEffect(() => {}, [showInfo, showMore]);
  const subTopicImages = [
    { src: quiteria, name: "Maria Quitéria" },
    { src: leopoldina, name: "Maria Leopoldina" },
  ];

  const informacoes = [
    {
      name: "Maria Quitéria",
      article: `Maria Quitéria de Jesus é mais conhecida por sua participação na Guerra da Independência do Brasil, mas sua relevância se estende ao início do período regencial devido ao seu legado e ao impacto de suas ações. Ela se disfarçou de homem para se alistar no exército brasileiro, lutando pela independência do país. Maria Quitéria tornou-se um símbolo de bravura e um exemplo da capacidade das mulheres de contribuir significativamente para momentos cruciais da história do Brasil, inspirando outras mulheres a lutarem por seus direitos e pela sua nação em períodos subsequentes, incluindo o regencial.`,
    },
    {
      name: "Maria Leopoldina",
      article: ` Embora a participação direta de Maria Leopoldina, a arquiduquesa austríaca e esposa de Dom Pedro I, tenha sido mais marcante nos eventos que antecederam a independência do Brasil em 1822, sua influência perdurou no início do Período Regencial. Ela desempenhou um papel decisivo na declaração da independência do Brasil, atuando como regente e tomando decisões cruciais na ausência de Dom Pedro I. A atuação de Maria Leopoldina como uma figura que apoiava movimentos importantes para o Brasil e seu papel na consolidação da independência brasileira ressoam como exemplo de liderança feminina em um período crítico de formação nacional.`,
    },
  ];

  return (
    <div className={styles.generalInfo}>
      <div>
        <section>
          <h1>Brasil Regencial</h1>
          <img src={brasilregencial} alt="BrasilRegencial.png" />
          <p>
            O Período Regencial é uma fase da história do Brasil que ocorreu
            entre 1831 e 1840, marcando a transição entre a abdicação de Dom
            Pedro I e a menoridade de Dom Pedro II. Este período foi
            caracterizado por intensas lutas políticas, sociais e regionais,
            refletindo a complexidade da formação do Estado brasileiro e sua
            identidade nacional.
          </p>
          <h3>Regências e Conflitos Internos</h3>
          <p>
            Após a abdicação de Dom Pedro I, o Brasil foi governado por
            regências provisórias e permanentes, enfrentando grandes desafios
            para manter a unidade nacional. As regências foram períodos de
            instabilidade e de confrontos, como a Cabanagem, a Sabinada, a
            Balaiada, e a Revolução Farroupilha, refletindo as tensões e os
            conflitos internos do país.
          </p>
          <h3>Reformas Políticas e Sociais</h3>
          <p>
            Durante o Período Regencial, foram implementadas importantes
            reformas políticas e sociais visando a modernização e a
            estabilização do país. O Ato Adicional de 1834 foi uma dessas
            reformas, alterando a Constituição de 1824 e concedendo maior
            autonomia às províncias, além de criar o Município Neutro, futuro
            Rio de Janeiro, como capital do Império.
          </p>
          <h3>Guarda Nacional e o Poder Moderador</h3>
          <p>
            A criação da Guarda Nacional em 1831 e a consolidação do poder
            moderador foram medidas importantes para o fortalecimento da
            autoridade central, buscando equilibrar o poder entre as diferentes
            facções políticas e sociais. Estas iniciativas, no entanto, também
            geraram novas tensões e disputas pelo controle e influência no
            governo regencial.
          </p>
          <h3>Economia e Sociedade no Período Regencial</h3>
          <p>
            A economia brasileira durante o Período Regencial continuou focada
            na agricultura de exportação, mas enfrentou dificuldades devido às
            instabilidades políticas e aos conflitos internos. A sociedade era
            marcada por profundas desigualdades, com a persistência da
            escravidão e a luta por direitos básicos e por melhorias nas
            condições de vida da população mais pobre.
          </p>
          <h3>Legado do Período Regencial</h3>
          <p>
            O legado do Período Regencial foi fundamental para o desenvolvimento
            político, social e econômico do Brasil. As reformas implementadas,
            as experiências de autonomia provincial e os desafios enfrentados
            durante esse período contribuíram para moldar o caráter do Estado
            brasileiro e preparar o caminho para a segunda metade do século XIX,
            especialmente com a ascensão ao trono de Dom Pedro II e o início de
            seu longo reinado.
          </p>
          <h4>Figuras de Destaque no Período Regencial</h4>
          <p>
            Várias figuras se destacaram durante o Período Regencial, tanto na
            política quanto em movimentos sociais e culturais. Líderes de
            revoltas e regentes, como Diogo Antônio Feijó e Padre Diogo Feijó,
            tiveram papéis significativos na governança e nas lutas internas do
            país. Personalidades como Bernardo Pereira de Vasconcelos e
            Francisco de Lima e Silva também foram fundamentais nas discussões
            políticas e na implementação de reformas.
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

export default Regencial;
