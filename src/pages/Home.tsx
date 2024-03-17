import styles from "./styles/Home.module.css";
import AnimatedPage from "../components/animations/AnimatedPage";
import { useSpring, animated } from "react-spring";

function Home() {
  const propsLeft = useSpring({
    from: { x: -100 },
    to: {
      x: 0,
    },
    config: {
      mass: 5,
      friction: 100,
      tension: 300,
    },
  });

  const propsRight = useSpring({
    from: { x: 100 },
    to: {
      x: 0,
    },
    config: {
      mass: 5,
      friction: 100,
      tension: 300,
    },
  });
  const propsCenter = useSpring({
    from: { y: 300 },
    to: {
      y: 0,
    },
    config: {
      mass: 3,
      friction: 90,
      tension: 400,
    },
  });

  return (
    <AnimatedPage>
      <div className={styles.pageElements}>
        <div className={styles.container1}>
          <animated.div style={propsLeft} className={styles.contentLeft}>
            <h2>Explorando as Possibilidades Digitais na Educação Histórica</h2>
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
          </animated.div>
          <animated.div style={propsCenter} className={styles.contentCenter}>
            <h2> Elas na Vez!</h2>
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
          </animated.div>
          <animated.div style={propsRight} className={styles.contentRight}>
            <h2>
              Contribuindo para um Futuro mais Igualitário através da Educação
            </h2>
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
          </animated.div>
        </div>
        {/** <div className={styles.bottomElements}>
          <div className={styles.bottomIconBox}>
            {" "}
            <GrChat />{" "}
          </div>
        </div>*/}
      </div>
    </AnimatedPage>
  );
}

export default Home;
