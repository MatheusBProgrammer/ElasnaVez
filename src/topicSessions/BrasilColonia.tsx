import React from "react";
import styles from "./styles/general.module.css";
import brasilcoloniaimg from "../assets/imgs/brasilcoloniaimg.jpg";
import catarina from "../assets/imgs/catarina.jpg";
import anastacia from "../assets/imgs/anastacia.jpg";
import AnimatedPage from "../components/animations/AnimatedPage";

function BrasilColonia() {
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
      <AnimatedPage>
        <div>
          <section>
            <h1>Representatividade Feminina no Brasil Colonial</h1>
            <img src={brasilcoloniaimg} alt="BrasilColonia.png" />
            <p>
              O Brasil Colonial, que se estende de 1500, com a chegada dos
              portugueses ao território que viria a ser conhecido como Brasil,
              até a proclamação de sua independência em 1822, é um período
              historicamente narrado através de uma perspectiva
              predominantemente masculina e eurocêntrica. Tal abordagem tem,
              reiteradamente, minimizado ou mesmo omitido a imensa contribuição
              das mulheres, particularmente daquelas de origem indígena,
              africana e afrodescendente, no tecido socioeconômico, cultural e
              resistivo da colônia.
            </p>
            <p>
              {" "}
              Este segmento se propõe a realizar uma profunda revisão crítica
              dessa narrativa unilateral, com o objetivo de destacar e valorizar
              o papel fundamental que essas mulheres desempenharam na
              conformação da sociedade brasileira desde seus primórdios.
              Diferentemente do que comumente é retratado nos livros didáticos
              tradicionais, que frequentemente relegam as mulheres a papéis
              secundários ou de mera subordinação, a verdade é que a presença
              feminina no Brasil Colonial foi marcada por uma diversidade de
              atuações, que vão desde a resistência e a luta contra o sistema
              escravocrata até a contribuição para a economia, passando pelo
              protagonismo em processos de mediação cultural e na sustentação de
              redes de apoio social e comunitário. As mulheres indígenas, por
              exemplo, não apenas facilitaram a comunicação e o entendimento
              entre os colonizadores portugueses e os povos nativos através de
              seu papel como intérpretes e intermediárias, mas também foram
              essenciais na transmissão de conhecimentos sobre a terra e seus
              recursos, práticas agrícolas sustentáveis e medicina tradicional,
              elementos sem os quais a sobrevivência e o estabelecimento dos
              europeus teriam sido consideravelmente mais desafiadores.
            </p>
            <p>
              {" "}
              Por outro lado, as mulheres africanas e suas descendentes,
              arrancadas de suas terras e trazidas forçadamente ao Novo Mundo,
              trouxeram consigo não somente sua força de trabalho, mas também
              riquíssimos elementos culturais, religiosos e sociais, que se
              entrelaçaram de maneira indelével à identidade que viria a ser a
              brasileira. Apesar das brutalidades do cativeiro, estas mulheres
              foram arquitetas de estratégias de resistência e sobrevivência,
              desde a conservação de práticas culturais e religiosas africanas
              até a organização de fugas e a fundação de quilombos, onde
              exerciam papéis de liderança e tomada de decisões.
            </p>
            <p>
              As mulheres europeias, por sua vez, embora em menor número e
              frequentemente oriundas de classes sociais privilegiadas, também
              influenciaram os rumos da colonização, seja por meio de suas
              atividades no âmbito doméstico, onde muitas vezes geriam grandes
              propriedades na ausência de seus maridos, seja através da
              educação, da religião e da assistência social, introduzindo
              práticas educacionais e de caridade que afetariam as gerações
              futuras.
            </p>
            <p>
              {" "}
              Contudo, apesar de sua inegável importância, a representatividade
              dessas mulheres na historiografia oficial e, por extensão, nos
              livros didáticos de Ciências Humanas tem sido marcada por lacunas
              e omissões significativas. Isso não apenas empobrece a compreensão
              da complexidade e da diversidade do período colonial brasileiro,
              mas também perpetua uma visão histórica distorcida, que
              negligencia a contribuição de metade da população na construção do
              país.
            </p>
            <p>
              {" "}
              Portanto, este segmento busca não apenas iluminar essas figuras
              historicamente marginalizadas, mas também incentivar uma reflexão
              crítica sobre as metodologias de ensino e a produção de materiais
              didáticos, de modo que futuras gerações tenham acesso a uma
              narrativa mais equitativa, inclusiva e representativa da rica
              tapeçaria humana que compõe a história do Brasil.
            </p>
            <h3>Contribuições Sociais e Educação</h3>
            <p>
              A influência das mulheres europeias no Brasil Colonial transcendeu
              significativamente o espaço doméstico e social, imprimindo marcas
              indeléveis na tessitura da sociedade da época. Embora suas
              atividades cotidianas fossem predominantemente centradas no
              gerenciamento da casa e na educação dos filhos, uma parcela
              notável dessas mulheres expandiu seu raio de ação para além dos
              muros do lar, envolvendo-se em iniciativas educacionais e
              filantrópicas. Suas contribuições, embora frequentemente
              subestimadas pelos relatos históricos convencionais, foram
              fundamentais para a formação e o desenvolvimento das primeiras
              instituições educacionais e de assistência social na colônia.
            </p>
            <p>
              Dentre essas mulheres, algumas se destacaram por fundar escolas,
              tanto para a educação básica quanto para o ensino de ofícios,
              permitindo não apenas às crianças europeias, mas também às
              indígenas e afrodescendentes, um acesso, ainda que limitado, à
              educação formal. Essas iniciativas pioneiras não somente
              desafiavam as normas de gênero da época, relegando às mulheres um
              papel passivo na sociedade, mas também contribuíam para a
              mitigação de desigualdades sociais extremas, característica
              marcante do período colonial. Por meio da educação, essas mulheres
              promoviam valores de igualdade e justiça, semeando as bases para
              transformações sociais futuras.
            </p>
            <p>
              Além disso, a atuação filantrópica dessas mulheres europeias
              revelou-se em diversos âmbitos, desde a criação de hospitais e
              orfanatos até o desenvolvimento de programas de assistência aos
              pobres e desamparados. Essas atividades não apenas forneciam redes
              de segurança social essenciais em um contexto de ausência de
              políticas públicas efetivas, mas também reforçavam a importância
              da solidariedade e da compaixão como valores centrais na
              comunidade colonial. A participação dessas mulheres em tais
              empreendimentos evidencia uma compreensão aguçada das necessidades
              sociais de sua época e um compromisso genuíno com o bem-estar da
              coletividade, desafiando assim as concepções tradicionais que as
              confinavam a esferas de atuação restritas.
            </p>
            <p>
              A inclusão da história das mulheres no contexto do Brasil Colonial
              nos livros didáticos de Ciências Humanas apresenta uma
              oportunidade única de reequilibrar a narrativa histórica, que tem
              sido predominantemente masculina e centrada na perspectiva
              europeia. O Brasil Colonial, um período definido pela chegada dos
              portugueses em 1500 até a independência em 1822, foi marcado por
              intensas dinâmicas sociais, econômicas e culturais, nas quais as
              mulheres — indígenas, africanas, afrodescendentes e europeias —
              desempenharam papéis essenciais. Contudo, suas contribuições e
              resistências frequentemente não são destacadas nos materiais
              educacionais tradicionais.
            </p>
            <p>
              Ao revisitar esse período sob a ótica da representatividade
              feminina, os livros didáticos podem promover uma compreensão mais
              abrangente e diversificada da história brasileira. É fundamental
              reconhecer as mulheres não apenas como vítimas ou figuras
              passivas, mas como agentes ativos que influenciaram e foram
              fundamentais nas transformações sociais, nas estruturas econômicas
              e na resistência cultural do Brasil Colonial. Seja por meio do
              papel das mulheres indígenas na mediação cultural entre seus povos
              e os colonizadores, das africanas e afrodescendentes na economia
              doméstica e na formação dos quilombos, ou das europeias na
              educação e na promoção de práticas filantrópicas, cada grupo
              contribuiu de maneira significativa para o tecido social da época.
            </p>
            <p>
              Além disso, a integração dessas histórias nos currículos escolares
              é crucial para desafiar e desconstruir estereótipos enraizados,
              além de promover a igualdade de gênero. Ao proporcionar aos
              estudantes acesso a uma narrativa histórica que valoriza as
              experiências femininas, educadores podem inspirar uma reflexão
              crítica sobre a persistência de desigualdades de gênero e raciais,
              e sobre como essas questões têm raízes profundas em nosso passado
              colonial.
            </p>
            <p>
              Portanto, repensar os conteúdos dos livros didáticos para incluir
              a história das mulheres no Brasil Colonial não é apenas uma
              questão de justiça histórica; é uma ação pedagógica essencial para
              a formação de cidadãos conscientes, críticos e capazes de
              valorizar a diversidade e a pluralidade de vozes que compõem a
              história brasileira. Este movimento rumo à inclusão promove um
              ensino de História mais rico, complexo e verdadeiro, refletindo a
              multiplicidade de experiências que formaram o Brasil.
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
      </AnimatedPage>
    </div>
  );
}

export default BrasilColonia;
