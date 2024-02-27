import React from "react";
import styles from "./styles/general.module.css";
import expansaomaritimaimg from "../assets/imgs/expansaomaritimaimg.jpg";
import isabel from "../assets/imgs/isabel2.jpg";
import braganca from "../assets/imgs/braganca.jpg";
import AnimatedPage from "../components/animations/AnimatedPage";

function EMaritima() {
  const [showInfo, setShowInfo] = React.useState<number | null>(null);
  const [showMore, setShowMore] = React.useState<number | null>(null);

  React.useEffect(() => {}, [showInfo, showMore]);
  const subTopicImages = [
    { src: isabel, name: "Isabel I" },
    { src: braganca, name: "Catarina de Bragança" },
  ];

  const informacoes = [
    {
      name: "Isabel I",
      article: `Isabel I da Espanha, também conhecida como Isabel, a Católica (1451-1504), foi uma figura-chave na história da Espanha e do mundo durante o final do século XV e início do século XVI. Ela se tornou rainha de Castela em 1474, após a morte de seu meio-irmão, Henrique IV de Castela. Seu casamento com Fernando II de Aragão em 1469 foi um passo crucial para a unificação da Espanha, uma vez que uniu as coroas de Castela e Aragão, embora os reinos continuassem a operar independentemente sob uma monarquia dual.

Isabel é mais conhecida por seu papel no patrocínio da viagem de Cristóvão Colombo em 1492, que levou à descoberta das Américas para a Europa e iniciou a era da exploração e colonização espanhola do Novo Mundo. Esse feito não apenas expandiu significativamente o império espanhol e suas riquezas, mas também teve profundas consequências para a história mundial, desencadeando o intercâmbio colombiano e alterando os equilíbrios econômicos e culturais globais.

Seu reinado também é notável pela conclusão da Reconquista, com a captura de Granada em 1492, eliminando o último reduto muçulmano na península Ibérica. Além disso, Isabel e Fernando estabeleceram a Inquisição Espanhola em 1478, um movimento que visava consolidar a ortodoxia católica em seus reinos, mas que também levou à perseguição de judeus, muçulmanos e outros considerados hereges.`,
    },
    {
      name: "Catarina de Bragança",
      article: `Catarina de Bragança (1638-1705) foi uma infanta portuguesa que se tornou rainha da Inglaterra, Escócia e Irlanda por meio de seu casamento com o rei Carlos II da Inglaterra em 1662. Sua união foi arranjada como parte de uma aliança política e um dote que incluiu direitos comerciais valiosos para a Inglaterra em territórios portugueses, além de Tangier e Bombaim, aumentando significativamente a influência inglesa no comércio global.

Embora Catarina não tenha tido filhos que sobreviveram à infância, sua presença na corte inglesa teve um impacto cultural duradouro. Ela é frequentemente creditada por introduzir o costume do chá da tarde na Inglaterra, uma tradição que se tornou um elemento central da sociedade britânica. Sua fé católica romana também foi um ponto de tensão durante seu reinado, numa época em que o antipapismo estava em alta na Inglaterra. Apesar dessas dificuldades, Catarina manteve sua dignidade e popularidade entre o povo, sobrevivendo até mesmo ao marido e vivendo o resto de seus dias na Inglaterra, antes de retornar a Portugal, onde faleceu.

Ambas as rainhas, Isabel I da Espanha e Catarina de Bragança, deixaram legados duradouros que transcendem suas vidas, influenciando não apenas os eventos de suas respectivas épocas, mas também a cultura e a política mundiais de maneiras que ainda são sentidas hoje.`,
    },
  ];

  return (
    <div className={styles.generalInfo}>
      <div>
        <section>
          <h1>Expansão Marítima</h1>
          <img src={expansaomaritimaimg} alt="Expansão Marítima" />
          <p>
            A Expansão Marítima, ocorrida entre os séculos XV e XVI, foi um
            período de grandes descobertas geográficas realizadas pelas nações
            europeias, marcando o início da era dos descobrimentos. Este
            movimento foi impulsionado pela busca de novas rotas comerciais,
            pela necessidade de acesso direto às riquezas do Oriente e pela
            expansão do Cristianismo. As viagens marítimas levaram à descoberta
            de novas terras, à ampliação dos horizontes geográficos e culturais
            e ao estabelecimento de impérios coloniais.
          </p>
          <h3>Inovações Náuticas</h3>
          <p>
            O sucesso das expedições marítimas foi possibilitado por avanços
            significativos na tecnologia náutica, incluindo o aperfeiçoamento da
            caravela, a introdução do astrolábio e o desenvolvimento de mapas
            mais precisos. Essas inovações permitiram aos navegadores europeus
            viajar mais longe e com maior segurança, abrindo novas rotas pelo
            globo.
          </p>
          <h3>Principais Exploradores</h3>
          <p>
            Figuras como Vasco da Gama, que encontrou o caminho marítimo para a
            Índia contornando o Cabo da Boa Esperança, e Cristóvão Colombo, que
            chegou às Américas em 1492, são emblemáticas deste período. Outros
            exploradores, como Fernão de Magalhães, que liderou a primeira
            expedição a circum-navegar o globo, também são fundamentais para
            compreender a magnitude das explorações marítimas.
          </p>
          <h3>Impactos Globais</h3>
          <p>
            A Expansão Marítima teve profundos impactos globais, incluindo o
            intercâmbio de culturas, mercadorias e tecnologias entre o Velho e o
            Novo Mundo. Este período também foi marcado pelo início do sistema
            de comércio transatlântico de escravos e pelo estabelecimento de
            rotas comerciais que conectaram diversos continentes.
          </p>
          <h3>Consequências Políticas e Econômicas</h3>
          <p>
            A chegada a novas terras e a subsequente colonização tiveram grandes
            consequências políticas e econômicas, incluindo o aumento do poder
            marítimo e comercial de nações como Portugal e Espanha. A competição
            entre as potências europeias pelos territórios recém-descobertos e
            suas riquezas foi um dos motores da política internacional durante
            séculos.
          </p>
          <h4>Figuras Femininas na Expansão Marítima</h4>
          <p>
            Apesar do foco tradicional nas figuras masculinas, mulheres também
            desempenharam papéis importantes na Expansão Marítima, seja como
            financiadoras, influenciadoras ou participantes indiretas das
            explorações. Rainhas como Isabel I da Espanha, que apoiou a viagem
            de Colombo ao Novo Mundo, e Catarina de Bragança, cujo dote incluiu
            territórios que facilitaram o comércio marítimo português, são
            exemplos de mulheres cujas ações tiveram impacto significativo nesse
            período. Além disso, figuras como Inês de Castro e Dona Beatriz,
            mecenas e apoiadoras das viagens exploratórias, demonstram o papel
            crucial das mulheres na viabilização e no suporte das jornadas que
            mudaram o mundo.
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

export default EMaritima;
