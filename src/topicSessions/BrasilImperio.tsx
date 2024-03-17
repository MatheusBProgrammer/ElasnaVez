import React from "react";
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
            O período do Brasil Império, que se estende de 1822, ano da
            independência do Brasil do domínio português, até a proclamação da
            República em 1889, é uma fase de intensas transformações políticas,
            econômicas e sociais. Historicamente, a narrativa desse período tem
            sido dominada por figuras masculinas, tanto no âmbito político
            quanto no econômico, com pouca ênfase na contribuição das mulheres à
            sociedade imperial brasileira. Este desequilíbrio na representação
            histórica negligencia o papel significativo desempenhado pelas
            mulheres, especialmente aquelas de origens indígena, africana,
            afrodescendente e europeia, na construção e na manutenção da
            identidade e da estrutura social do Brasil daquela época.
          </p>
          <p>
            Esta seção tem como objetivo revisitar o período do Brasil Império
            sob uma perspectiva que reconhece e valoriza a participação feminina
            na história. Contrariamente à narrativa tradicional, que muitas
            vezes confina as mulheres a papéis periféricos ou de subordinação, a
            realidade é que a presença feminina durante o Brasil Império foi
            marcada por uma diversidade de ações e influências que vão desde a
            participação ativa em movimentos sociais e políticos, até
            contribuições significativas para a economia e para a cultura do
            país. As mulheres indígenas, por exemplo, continuaram a desempenhar
            um papel crucial na preservação da cultura e da língua nativas, além
            de participarem ativamente na resistência contra a expansão dos
            colonos e a usurpação de suas terras.
          </p>
          <p>
            As mulheres africanas e afrodescendentes, por sua vez, estavam no
            coração das lutas contra a escravidão e pela preservação de sua
            cultura e identidade. Apesar das restrições impostas pela sociedade
            escravocrata, elas encontraram maneiras de resistir e de afirmar sua
            humanidade, seja através da manutenção de práticas culturais e
            religiosas, seja pela participação em rebeliões e quilombos, onde
            muitas vezes assumiram posições de liderança.
          </p>
          <p>
            Mulheres europeias e brasileiras de classes mais abastadas exerceram
            influência em esferas diversas, desde o gerenciamento de
            propriedades na ausência de seus maridos até o envolvimento em
            questões educacionais, religiosas e de beneficência. Sua atuação não
            estava limitada ao âmbito doméstico; muitas delas foram pioneiras na
            introdução de novas práticas educacionais e sociais que contribuíram
            para a modernização do Brasil.
          </p>
          <p>
            No entanto, a contribuição dessas mulheres à historiografia oficial
            e aos livros didáticos de Ciências Humanas ainda é marcada por
            significativas lacunas e omissões. Este fato não apenas compromete a
            compreensão da complexidade do período imperial brasileiro, mas
            também perpetua uma visão histórica distorcida, que minimiza a
            participação feminina na construção da nação.
          </p>
          <p>
            Portanto, esta seção busca iluminar essas figuras históricas
            marginalizadas e incentivar uma reflexão crítica sobre as
            metodologias de ensino e a produção de materiais didáticos, visando
            uma representação mais equitativa e inclusiva da história do Brasil
            Império.
          </p>
          <h3>Contribuições Sociais e Educação</h3>
          <p>
            A influência das mulheres no Brasil Império vai além do âmbito
            doméstico, marcando presença significativa também nas áreas da
            educação e da assistência social. Mesmo em um contexto de limitações
            sociais e legais, muitas mulheres se destacaram por sua participação
            ativa na fundação de instituições educacionais e filantrópicas.
            Estas iniciativas não apenas desafiavam as convenções de gênero da
            época, mas também representavam esforços pioneiros na luta contra as
            disparidades sociais profundamente enraizadas na sociedade imperial.
          </p>
          <p>
            Algumas mulheres notáveis se dedicaram à fundação de escolas que
            ofereciam educação básica e profissionalizante, não só para meninas
            da elite, mas também para crianças indígenas e afrodescendentes,
            promovendo assim uma maior inclusão social. Essas escolas eram
            frequentemente os primeiros espaços onde se valorizava a educação
            feminina, contribuindo para o empoderamento das mulheres e para a
            transformação social a longo prazo.
          </p>
          <p>
            Além da educação, a atuação filantrópica dessas mulheres era
            evidente na criação de hospitais, orfanatos e outras instituições de
            assistência, preenchendo lacunas deixadas pela ausência de políticas
            públicas eficazes. Tais iniciativas destacavam a importância da
            solidariedade e da compaixão, reforçando o tecido social do Império
            Brasileiro.
          </p>
          <p>
            A integração da história das mulheres no contexto do Brasil Império
            nos livros didáticos representa uma oportunidade para corrigir
            desequilíbrios na narrativa histórica, reconhecendo o papel
            fundamental que elas desempenharam nas esferas social, econômica e
            cultural. Repensar os conteúdos para incluir estas histórias não é
            apenas uma questão de justiça histórica, mas uma prática pedagógica
            essencial para a formação de uma consciência crítica capaz de
            valorizar a diversidade e pluralidade que caracterizam a história
            brasileira. Este movimento em direção à inclusão promove um ensino
            de história mais abrangente, complexo e verdadeiro.
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

export default BrasilImperio;
