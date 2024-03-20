import React from "react";
import styles from "./styles/TimeLine.module.css";
import AnimatedPage from "../components/animations/AnimatedPage";
import img1 from "../assets/imgs/img1.jpg";
import img3 from "../assets/imgs/img3.jpg";
import img4 from "../assets/imgs/img4.jpg";
import BrasilColonia from "../topicSessions/BrasilColonia";
import BrasilImperio from "../topicSessions/BrasilImperio";
import Regencial from "../topicSessions/Regencia";
import { BsHourglassSplit } from "react-icons/bs";

function TimeLine() {
  const [hovered, setHovered] = React.useState<number | null>(null);
  const menu = [
    { src: img1, name: "Brasil Colônia", page: BrasilColonia }, // Aqui deve ser passado o componente diretamente
    { src: img3, name: "Brasil Império", page: BrasilImperio },
    { src: img4, name: "Período Regencial", page: Regencial },
  ];

  const [showContent, setShowContent] = React.useState<number | null>(null);
  const SelectedPage = showContent !== null ? menu[showContent].page : null;
  const menuClass =
    showContent !== null ? `${styles.menu} ${styles.menuFixed}` : styles.menu;

  return (
    <AnimatedPage>
      <div className={styles.container}>
        <div className={menuClass}>
          {menu.map((image, index) => (
            <div
              key={index}
              className={styles.menuItem}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              onClick={() =>
                setShowContent(showContent === index ? null : index)
              }
            >
              <img src={image.src} alt={`Image ${index + 1}`} />
              <div className={styles.overlay}>
                <p>{hovered === index && <p>{image.name}</p>}</p>
              </div>
            </div>
          ))}
        </div>

        {SelectedPage ? (
          <AnimatedPage>
            <SelectedPage />
          </AnimatedPage>
        ) : (
          <div className={styles.holder}>
            <BsHourglassSplit className={styles.swingAnimation} />
            <p>
              <strong>Navegue pelo nosso menu</strong> para explorar os períodos
              históricos e as figuras femininas que deixaram sua marca indelével
              em cada era. De cientistas e educadoras no Brasil Colonial a
              ativistas políticas na Revolução Francesa, de pioneiras na ciência
              e tecnologia no século XX a líderes influentes no Brasil Império,
              nossa plataforma é um convite para viajar no tempo e reconhecer as
              mulheres que moldaram a história.
            </p>
          </div>
        )}
      </div>
    </AnimatedPage>
  );
}

export default TimeLine;
