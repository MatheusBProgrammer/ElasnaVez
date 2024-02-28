import React from "react";
import styles from "./styles/general.module.css";
import reformaprotestanteimg from "../assets/imgs/reformaprotestanteimg.jpg";
import jeane from "../assets/imgs/jeanne.jpg";
import vonbora from "../assets/imgs/vonbora.jpg";
import AnimatedPage from "../components/animations/AnimatedPage";

function RProtestante() {
  const [showInfo, setShowInfo] = React.useState<number | null>(null);
  const [showMore, setShowMore] = React.useState<number | null>(null);

  React.useEffect(() => {}, [showInfo, showMore]);
  const subTopicImages = [
    { src: jeane, name: "Jeanne III de Navarra" },
    { src: vonbora, name: "Catarina de Bora" },
  ];

  const informacoes = [
    {
      name: "Catarina",
      article: `Katharina von Bora, mais conhecida como a esposa de Martinho Lutero, teve um papel fundamental no estabelecimento do modelo do lar protestante e na promoção de um novo papel para a mulher dentro deste contexto. Antes de se casar com Lutero, Katharina era uma freira que fugiu do convento, movida pelas ideias reformistas. Seu casamento com Lutero em 1525 foi significativo não apenas para a vida pessoal de ambos, mas também serviu como um exemplo poderoso do novo ideal protestante de casamento e vida familiar.

Katharina gerenciava a vasta casa dos Lutero, que se tornou um centro de atividade religiosa, acadêmica e social. Ela era conhecida por sua habilidade em administrar a economia doméstica, hospedar visitantes e estudantes, e apoiar o trabalho de Lutero. Através de suas habilidades de gestão e hospitalidade, Katharina contribuiu significativamente para o bem-estar da comunidade protestante emergente e ajudou a estabelecer o papel da esposa como uma parceira vital na vida religiosa e social.`,
    },
    {
      name: "Catarina",
      article: `Jeanne d'Albret, rainha de Navarra, foi uma figura chave na Reforma Protestante na França. Como líder política e espiritual, ela usou sua posição para avançar nas causas do protestantismo em um período e lugar onde isso implicava em riscos políticos significativos. Jeanne foi uma das primeiras monarcas a adotar o Calvinismo e trabalhou incansavelmente para instituir a Reforma em seus domínios.

Sua contribuição mais notável foi a sua determinação em promover a Reforma, incluindo a organização de sínodos, a promoção da educação protestante e a reforma das igrejas sob seu controle para alinhá-las com as crenças protestantes. Jeanne também foi fundamental na proteção dos huguenotes (protestantes franceses) durante as Guerras de Religião Francesas, oferecendo-lhes um refúgio seguro e lutando por seus direitos religiosos.

Além de suas realizações políticas e religiosas, Jeanne d'Albret é lembrada por sua coragem e determinação em enfrentar a oposição, muitas vezes em grande risco pessoal. Sua liderança não apenas fortaleceu o protestantismo na França, mas também inspirou futuras gerações de mulheres a assumirem papéis de liderança em suas comunidades e movimentos religiosos.`,
    },
  ];

  return (
    <div className={styles.generalInfo}>
      <div>
        <section>
          <h1>Reforma Protestante</h1>
          <img src={reformaprotestanteimg} alt="BrasilColonia.png" />
          <p>
            A Reforma Protestante foi um movimento de renovação religiosa que
            ocorreu no século XVI, iniciado por Martinho Lutero em 1517, com a
            publicação de suas 95 teses contra as práticas da Igreja Católica.
            Este movimento se espalhou por toda a Europa, levando à criação de
            várias denominações cristãs protestantes, como os luteranos,
            calvinistas e anglicanos, e provocou profundas transformações
            religiosas, culturais, sociais e políticas.
          </p>
          <h3>Origens e Causas</h3>
          <p>
            As origens da Reforma Protestante são multifacetadas, incluindo
            descontentamento com as práticas corruptas da Igreja Católica, como
            a venda de indulgências, e um desejo de retorno às escrituras como
            única fonte de autoridade religiosa. O humanismo renascentista
            também desempenhou um papel crucial, promovendo valores de
            individualismo e questionamento da autoridade.
          </p>
          <h3>Principais Reformadores</h3>
          <p>
            Além de Martinho Lutero, outros reformadores tiveram papéis
            fundamentais na disseminação das ideias protestantes, como João
            Calvino, que estabeleceu as bases da teologia reformada, e Henrique
            VIII, que levou à formação da Igreja Anglicana. Esses líderes
            divergiram em vários pontos teológicos, mas compartilhavam o
            objetivo comum de reformar a igreja.
          </p>
          <h3>Impacto Social e Político</h3>
          <p>
            A Reforma teve um impacto significativo na estrutura social e
            política da Europa. A quebra da unidade religiosa levou a guerras
            religiosas, mudanças políticas e o surgimento do estado moderno.
            Também contribuiu para o desenvolvimento da educação, com a promoção
            da leitura da Bíblia em línguas vernáculas e a fundação de escolas e
            universidades.
          </p>
          <h3>Contribuição das Mulheres</h3>
          <p>
            As mulheres desempenharam um papel vital na Reforma Protestante,
            tanto na disseminação das novas ideias religiosas quanto no apoio às
            comunidades reformadas. Figuras como Katharina von Bora, esposa de
            Lutero, e Jeanne d'Albret, rainha de Navarra, foram fundamentais
            para o avanço da reforma, além de contribuírem para a educação e a
            assistência social dentro das comunidades protestantes.
          </p>
          <h4>Mulheres na Propagação da Fé</h4>
          <p>
            Mulheres de diferentes classes sociais ajudaram a disseminar as
            ideias da Reforma, seja através do apoio a pregadores reformistas,
            da hospedagem de reuniões religiosas em suas casas ou da
            distribuição de literatura protestante. Sua participação ativa foi
            crucial para a adesão de muitas comunidades às novas crenças.
          </p>
          <h4>Mulheres na Educação e Literatura</h4>
          <p>
            A ênfase protestante na leitura da Bíblia por todos os fiéis levou a
            um aumento no analfabetismo entre as mulheres. Elas também
            contribuíram para a literatura protestante, escrevendo obras que
            defendiam a reforma ou traduzindo textos religiosos para as línguas
            vernáculas, promovendo assim a educação e a disseminação das crenças
            protestantes.
          </p>
          <h4>Influência das Mulheres na Reforma</h4>
          <p>
            As mulheres não só apoiaram a Reforma através de seus papéis
            tradicionais, mas também desafiaram as normas de gênero da época,
            assumindo lideranças em comunidades religiosas e participando
            ativamente do debate teológico. Sua influência estendeu-se por todos
            os aspectos da vida social e religiosa, contribuindo
            significativamente para o legado e a expansão do protestantismo.
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

export default RProtestante;
