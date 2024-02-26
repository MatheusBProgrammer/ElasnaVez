import React from "react";
import styles from "./styles/general.module.css";
import brasilcoloniaimg from "../assets/imgs/brasilcoloniaimg.jpg";
import catarina from "../assets/imgs/catarina.jpg";
import anastacia from "../assets/imgs/anastacia.jpg";
import AnimatedPage from "../components/animations/AnimatedPage";

function RFrancesa() {
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
      <div>
        <section>
          <h1>Revolução Francesa</h1>
          <img src={brasilcoloniaimg} alt="BrasilColonia.png" />
          <p>
            O Brasil Colonial refere-se ao período da história brasileira entre
            1500, com a chegada dos portugueses, e 1822, quando o Brasil
            declarou sua independência de Portugal. Este período é marcado por
            uma série de transformações políticas, econômicas, sociais e
            culturais, que foram fundamentais para a formação do Brasil
            contemporâneo.
          </p>
          <h3>Descobrimento e Colonização</h3>
          <p>
            A chegada de Pedro Álvares Cabral em 1500 marca o início da era
            colonial brasileira. Inicialmente, o interesse português no Brasil
            estava centrado na extração do pau-brasil, uma madeira valiosa
            utilizada na Europa para a produção de tintas. O comércio do
            pau-brasil era realizado principalmente através do escambo com os
            povos indígenas.
          </p>
          <h3>Expansão Territorial e Econômica</h3>
          <p>
            A partir de meados do século XVI, com a introdução da
            cana-de-açúcar, o Brasil começou a ganhar mais importância para a
            coroa portuguesa. O cultivo da cana-de-açúcar exigiu uma grande
            quantidade de mão de obra, o que levou ao início do tráfico
            transatlântico de escravos da África para o Brasil. As plantações de
            açúcar, ou engenhos, tornaram-se a espinha dorsal da economia
            colonial brasileira, juntamente com a mineração de ouro e diamantes
            que ganhou destaque no século XVIII.
          </p>
          <h3>Administração Colonial</h3>
          <p>
            A administração colonial portuguesa era caracterizada por um sistema
            de capitanias hereditárias, posteriormente substituído por um
            governo geral. Este sistema visava à exploração e colonização do
            território de forma mais eficaz. A sociedade colonial era
            profundamente estratificada, com uma rígida hierarquia social
            baseada em raça, nascimento e riqueza.
          </p>
          <h3>Influência Feminina no Período Colonial</h3>
          <p>
            As mulheres tiveram um papel significativo, embora muitas vezes
            subestimado, na história colonial brasileira. Suas contribuições
            variavam de acordo com a classe social, raça e origem, mas, de forma
            geral, incluíam o trabalho na agricultura, a participação na
            economia doméstica e, em alguns casos, o envolvimento em atividades
            comerciais e artesanais.
          </p>
          <h4>Mulheres Indígenas</h4>
          <p>
            As mulheres indígenas desempenharam um papel crucial na mediação
            cultural e na miscigenação durante o período inicial da colonização.
            Elas foram fundamentais na transmissão de conhecimentos sobre
            técnicas agrícolas locais, medicina tradicional e línguas nativas.
          </p>
          <h4>Mulheres Africanas e Afrodescendentes</h4>
          <p>
            As mulheres africanas e suas descendentes, muitas delas
            escravizadas, tiveram um papel central na economia doméstica
            colonial, na agricultura e na formação cultural do Brasil. A
            resistência ao sistema escravocrata, seja através de fugas, formação
            de quilombos ou resistência cotidiana, também contou com a
            participação ativa das mulheres.
          </p>
          <h4>Mulheres Europeias</h4>
          <p>
            As mulheres europeias, principalmente as de classes mais abastadas,
            exerciam influência principalmente no âmbito doméstico e social. No
            entanto, algumas se destacaram em outros campos, como a educação e a
            assistência social, contribuindo para a formação da sociedade
            colonial.
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

export default RFrancesa;
