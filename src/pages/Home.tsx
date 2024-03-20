import styles from "./styles/Home.module.css";
import womancell from "../assets/imgs/womancell.png";
import womantalk from "../assets/imgs/womantalk.png";
import womanteaching from "../assets/imgs/womanteaching.png";

function Home() {
  return (
    <div className={styles.pageElements}>
      <div>
        <div className={styles.container1}>
          <div className={styles.contentLeft}>
            <img src={womancell} />
            <p>
              Mergulhe nas possibilidades digitais que acompanham o novo modelo
              de Ensino Médio e como elas podem enriquecer o ensino da história
              das mulheres. Nosso projeto investiga o uso de tecnologias
              digitais e recursos online para criar uma experiência de
              aprendizado mais inclusiva, interativa e representativa.
              Acompanhe-nos em uma jornada que transcende as páginas
              tradicionais dos livros didáticos, promovendo uma educação que
              celebra a diversidade e a equidade.
            </p>
          </div>
          <div className={styles.contentCenter}>
            <img src={womanteaching} />

            <p>
              Descubra um espaço dedicado ao aprofundamento e à discussão sobre
              a representação das mulheres nos livros didáticos de Ciências
              Humanas no novo Ensino Médio. Nossa pesquisa, liderada por Carla
              Emanuela de Melo Lima, sob a orientação do Prof. Dr. Cícero
              Joaquim dos Santos, explora as transformações, desafios e
              possibilidades que emergem com a reforma educacional. Navegue por
              análises críticas, insights e reflexões sobre como os livros
              didáticos podem moldar a compreensão das contribuições das
              mulheres na história e na sociedade.
            </p>
          </div>
          <div className={styles.contentRight}>
            <img src={womantalk} />

            <p>
              Participe de um diálogo aberto sobre o papel crucial da educação
              na construção de uma sociedade mais justa e igualitária. Este
              website não é apenas uma plataforma para disseminar os resultados
              da pesquisa de mestrado de Carla Emanuela de Melo Lima; é um
              convite à comunidade educacional para refletir e agir sobre a
              maneira como as mulheres são representadas no ensino. Descubra
              como educadores, estudantes e a comunidade em geral podem
              colaborar para transformar os currículos escolares e fomentar um
              ambiente de aprendizado que valorize as histórias e as realizações
              das mulheres em todas as suas dimensões.
            </p>
          </div>
        </div>
      </div>

      {/** <div className={styles.bottomElements}>
          <div className={styles.bottomIconBox}>
            {" "}
            <GrChat />{" "}
          </div>
        </div>*/}
    </div>
  );
}

export default Home;
