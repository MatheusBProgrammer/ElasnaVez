import React, { useEffect } from "react";
import styles from "./styles/general.module.css";
import brasilimperioimg from "../assets/imgs/brasilimperioimg.jpg";
import isabel from "../assets/imgs/isabel.jpg";
import nisia from "../assets/imgs/nisia.jpg";
import AnimatedPage from "../components/animations/AnimatedPage";

function BrasilImperio() {
  const [showInfo, setShowInfo] = React.useState<number | null>(null);
  const [showMore, setShowMore] = React.useState<number | null>(null);

  React.useEffect(() => {}, [showInfo, showMore]);
  const subTopicImages = [
    { src: isabel, name: "Isabel Cristina Leopoldina " },
    { src: nisia, name: "Nísia Floresta" },
  ];

  const informacoes = [
    {
      name: "Isabel Cristina Leopoldina",
      article: `A Princesa Isabel do Brasil, Isabel Cristina Leopoldina Augusta Micaela Gabriela Rafaela Gonzaga, 
      nasceu em 29 de julho de 1846 e é uma das figuras mais emblemáticas da história brasileira. 
      Filha do imperador Dom Pedro II, Isabel tornou-se conhecida como "A Redentora" por seu papel decisivo na abolição da escravidão no Brasil,
       com a assinatura da Lei Áurea em 13 de maio de 1888. Este ato não apenas marcou o fim da escravatura no país,
        mas também é considerado um dos momentos definidores da transição do Brasil para uma sociedade mais justa e igualitária.

      Durante as ausências de seu pai, Isabel atuou como regente do império em três ocasiões diferentes,
       demonstrando uma governança marcada por um progressismo raro para a época. Sua regência é lembrada pela empatia demonstrada aos escravizados e pelo seu firme apoio ao movimento abolicionista, apesar das intensas pressões políticas e econômicas que enfrentava, inclusive dentro de sua própria corte.
      
      Além de sua atuação política, a Princesa Isabel teve um papel importante no fomento à cultura e à educação no Brasil.
       Ela apoiou diversas instituições de caridade, artes e promoveu a educação feminina, que naquela época era frequentemente negligenciada.
      
      Após a proclamação da República em 1889, Isabel e sua família foram exilados, passando a viver na Europa.
       Longe de sua terra natal, ela continuou a ser uma figura de grande estima entre os monarquistas brasileiros
        e deixou um legado duradouro na história do Brasil. 
        Sua contribuição para a abolição da escravatura é vista como seu maior legado,
         um ato de coragem e compaixão que ajudou a moldar o futuro do país. Mesmo em meio a controvérsias e debates sobre seu papel e o da monarquia na sociedade brasileira, a figura da Princesa Isabel permanece como um símbolo de progresso e humanidade.`,
    },
    {
      name: "Nísia Floresta",
      article: `
Nísia Floresta, cujo nome de batismo era Dionísia Gonçalves Pinto, nasceu em 12 de outubro de 1810, no Rio Grande do Norte, e é considerada uma das precursoras do feminismo no Brasil. Intelectual, educadora e escritora, Nísia Floresta destacou-se por sua luta em favor da educação feminina e pelos direitos das mulheres, em uma época em que tais ideias eram praticamente inexistentes na sociedade brasileira.

Desde jovem, Nísia demonstrou uma paixão pelo conhecimento e uma forte inclinação para a escrita, publicando seu primeiro livro, "Direitos das Mulheres e Injustiça dos Homens", em 1832, uma obra ousada que defendia a igualdade de gênero e criticava as limitações impostas às mulheres pela sociedade patriarcal. Este livro marcou o início de sua carreira literária e ativismo social, destacando-se como um dos primeiros tratados feministas no país.

Ao longo de sua vida, Nísia Floresta escreveu diversos trabalhos que abordavam temas como a educação, os direitos das mulheres, a abolição da escravidão e a importância do desenvolvimento intelectual e moral da sociedade. Ela também fundou e dirigiu escolas para meninas em diferentes regiões do Brasil, promovendo um modelo educacional que valorizava tanto a formação acadêmica quanto o desenvolvimento pessoal de suas alunas.

Nísia Floresta viveu parte de sua vida na Europa, onde continuou a escrever e a se engajar em círculos intelectuais e ativistas, ampliando sua visão sobre os movimentos sociais e feministas contemporâneos à sua época. Sua obra e sua vida são um testemunho de sua luta incansável pela igualdade de gênero e pela emancipação das mulheres.

A importância de Nísia Floresta transcende o seu tempo, pois suas ideias e realizações continuam a inspirar gerações de mulheres e feministas. Sua visão progressista e seu legado pioneiro na luta pelos direitos das mulheres no Brasil a estabelecem como uma figura fundamental na história do feminismo brasileiro e na luta pela igualdade e justiça social.`,
    },
  ];

  return (
    <div className={styles.generalInfo}>
      <div>
        <section>
          <h1>Brasil Império</h1>
          <img src={brasilimperioimg} alt="BrasilImpério.png" />
          <p>
            O Brasil Império abrange o período da história brasileira desde sua
            independência de Portugal em 1822 até a proclamação da República em
            1889. Este era é marcada por profundas transformações políticas,
            sociais, econômicas e culturais, definindo os contornos da nação
            brasileira em formação.
          </p>
          <h3>Independência e Consolidação</h3>
          <p>
            A independência do Brasil, proclamada por Dom Pedro I em 1822, abriu
            o caminho para uma série de desafios na construção do Estado e na
            definição de sua soberania. O período imperial foi marcado pela
            consolidação das fronteiras, pela centralização política sob o
            regime monárquico e por conflitos internos, como a Guerra do
            Paraguai.
          </p>
          <h3>Economia e Sociedade</h3>
          <p>
            A economia do Império foi fortemente baseada na agricultura de
            exportação, com o café assumindo papel central no século XIX. A
            sociedade era caracterizada por profundas desigualdades, marcadas
            pela escravidão até a abolição em 1888, e por uma estrutura social
            rígida, embora o período também tenha visto o surgimento de uma
            identidade nacional e avanços culturais significativos.
          </p>
          <h3>Abolição da Escravatura e o Fim do Império</h3>
          <p>
            A luta pela abolição da escravidão ganhou força ao longo do século
            XIX, culminando na Lei Áurea, assinada pela Princesa Isabel em 1888.
            Menos de um ano depois, a monarquia foi derrubada, e a República foi
            proclamada, encerrando o período imperial.
          </p>
          <h3>Influência Feminina no Brasil Império</h3>
          <p>
            A influência feminina no Brasil Império foi marcante e
            diversificada, refletindo-se em múltiplas esferas da vida social,
            cultural e política. Embora as mulheres da época estivessem em
            grande parte excluídas dos espaços formais de poder e decisão, suas
            contribuições foram fundamentais para o desenvolvimento e
            transformações do país durante o século XIX.
          </p>
          <p>
            {" "}
            As mulheres da elite, por exemplo, exerciam influência por meio de
            salões literários, espaços que se tornaram importantes centros de
            debate político e cultural. Estes salões eram frequentados por
            intelectuais, políticos e artistas, onde as mulheres, como
            anfitriãs, podiam mediar discussões e influenciar opiniões. Essa
            prática permitiu que algumas delas tivessem um papel indireto, mas
            significativo, na vida política e intelectual do país. No contexto
            da escravidão, que perdurou por quase todo o período imperial, as
            mulheres escravizadas desempenharam um papel crucial na economia
            doméstica e na produção agrícola.
          </p>{" "}
          Além disso, muitas dessas mulheres resistiram de maneiras sutis e
          explícitas ao sistema escravocrata, contribuindo para a preservação de
          práticas culturais africanas e para a luta pela liberdade. A abolição
          da escravatura em 1888, liderada pela Princesa Isabel, é
          frequentemente citada como o ápice da influência feminina no período.{" "}
          <p>
            No entanto, a luta pela abolição contou com a participação ativa de
            inúmeras mulheres anônimas, tanto negras quanto brancas, que atuaram
            em movimentos abolicionistas, participaram de campanhas de
            arrecadação de fundos para a compra de alforrias e esconderam
            escravos fugidos. As mulheres também tiveram um papel relevante na
            educação e nas artes. Ainda que enfrentassem restrições
            significativas para sua própria formação educacional e profissional,
            muitas se destacaram como educadoras, escritoras, artistas e
            jornalistas, contribuindo para o debate público e para a formação
            cultural do país.
          </p>
          <p>
            Apesar dos limites impostos pelo contexto social e político da
            época, a influência feminina no Brasil Império foi fundamental para
            as transformações culturais, sociais e políticas do período. Suas
            ações, tanto no âmbito público quanto no privado, contribuíram para
            a formação de um Brasil em transição, caminhando lentamente em
            direção a uma sociedade mais inclusiva e diversificada.
          </p>
          <h4>Princesa Isabel</h4>
          <p>
            Conhecida como "A Redentora", Princesa Isabel foi a responsável pela
            assinatura da Lei Áurea em 13 de maio de 1888, que aboliu a
            escravidão no Brasil. Sua ação foi um marco na história brasileira,
            alterando profundamente a sociedade e a economia. Isabel é lembrada
            por seu comprometimento com a causa abolicionista, apesar das fortes
            resistências políticas e econômicas.
          </p>
          <h4>Nísia Floresta</h4>
          <p>
            Nísia Floresta Brasileira Augusta, uma intelectual, educadora e
            escritora, foi uma das primeiras vozes femininas a se levantar em
            favor da educação das mulheres e contra a escravidão no Brasil. Sua
            obra abrange desde a poesia até tratados educacionais e ensaios
            sobre os direitos das mulheres, marcando seu papel como uma das
            precursoras do feminismo no Brasil.
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
                <div className={styles.more}>Mostrar mais...</div>
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

export default BrasilImperio;
