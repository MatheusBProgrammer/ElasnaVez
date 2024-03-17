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
            O Período Regencial, uma etapa crucial entre 1831 e 1840 na história
            do Brasil, serviu como uma ponte entre a abdicação de Dom Pedro I e
            a menoridade de Dom Pedro II. Este intervalo foi marcado por uma
            série de desafios políticos, sociais e regionais, destacando-se como
            um momento de definição para a identidade nacional e a estrutura do
            Estado brasileiro. Durante este tempo, a contribuição das mulheres
            na sociedade foi significativa, embora frequentemente subestimada ou
            ignorada pela historiografia tradicional.
          </p>
          <p>
            A revisão deste período sob uma nova ótica busca realçar o papel
            ativo das mulheres na formação do Brasil Regencial. Longe de serem
            meras figuras passivas, elas estiveram no centro de movimentos
            sociais e políticos, contribuíram para a economia e exerceram
            influência cultural considerável. As mulheres indígenas, por
            exemplo, desempenharam papéis fundamentais na manutenção da
            resistência cultural e na luta contra a invasão de suas terras,
            enquanto as mulheres afro-brasileiras e africanas, mesmo sob o jugo
            da escravidão, lutaram pela preservação de suas identidades e contra
            a opressão.
          </p>
          <p>
            Mulheres de origem europeia e brasileiras das classes mais abastadas
            não se limitaram ao âmbito doméstico; muitas avançaram para esferas
            públicas, envolvendo-se em educação, ativismo social e filantropia.
            Essas mulheres foram pioneiras na promoção de novas práticas
            educacionais e na introdução de iniciativas sociais que contribuíram
            para moldar o futuro do Brasil.
          </p>
          <p>
            Contudo, a presença e as contribuições dessas mulheres raramente são
            reconhecidas nos registros oficiais ou nos materiais didáticos,
            perpetuando uma visão incompleta daquele período crítico. Este
            desequilíbrio na narrativa histórica não apenas obscurece a
            compreensão da era Regencial, mas também diminui a relevância da
            participação feminina na formação da nação.
          </p>
          <p>
            Assim, o objetivo desta seção é iluminar as contribuições dessas
            mulheres frequentemente esquecidas, incentivando uma análise crítica
            das metodologias pedagógicas e da produção de conteúdo didático, em
            prol de uma representação mais justa e inclusiva do Período
            Regencial na história do Brasil.
          </p>
          <h3>Impacto na Educação e Reformas Sociais</h3>
          <p>
            A influência das mulheres no Período Regencial ultrapassou as
            barreiras domésticas, marcando presença também no âmbito da educação
            e da assistência social. Apesar das restrições impostas pela
            sociedade da época, muitas se destacaram por sua atuação decisiva na
            fundação de instituições educativas e de caridade. Essas ações não
            apenas desafiaram as normas de gênero vigentes, mas também
            representaram passos iniciais importantes na luta contra as
            desigualdades sociais arraigadas naquele contexto histórico.
          </p>
          <p>
            Algumas dessas mulheres notáveis empenharam-se na criação de escolas
            que ofereciam tanto a educação básica quanto a profissionalizante,
            acessíveis não somente a meninas da elite, mas também a crianças
            indígenas e afrodescendentes, fomentando a inclusão e a igualdade
            social. Estes espaços educacionais constituíram as primeiras
            instâncias de valorização da educação feminina no Brasil, promovendo
            o empoderamento feminino e estimulando mudanças sociais profundas.
          </p>
          <p>
            Além disso, o envolvimento das mulheres em iniciativas
            filantrópicas, como a criação de hospitais e orfanatos, preencheu
            lacunas críticas deixadas pela ausência de uma rede de proteção
            social estatal efetiva. Essas atividades evidenciaram a importância
            dos valores de solidariedade e compaixão, reforçando a coesão social
            durante um período de grandes desafios.
          </p>
          <p>
            A integração das histórias dessas mulheres no ensino do Período
            Regencial representa uma oportunidade valiosa para reequilibrar a
            narrativa histórica, reconhecendo suas contribuições essenciais para
            as esferas sociais, econômicas e culturais. A revisão dos currículos
            escolares para incluir esses relatos não é apenas um ato de justiça
            histórica, mas também uma estratégia pedagógica vital para a
            formação de cidadãos mais conscientes, críticos e apreciativos da
            diversidade e complexidade que compõem a história brasileira. Este
            esforço de inclusão promove um ensino de história mais completo,
            enriquecedor e autêntico.
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
                <AnimatedPage>
                  <div className={styles.article}>
                    {informacoes[index].article}
                  </div>
                </AnimatedPage>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Regencial;
