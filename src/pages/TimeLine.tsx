import React from "react";
import styles from "./styles/TimeLine.module.css";
import AnimatedPage from "../components/animations/AnimatedPage";
import img1 from "../assets/imgs/img1.jpg";
import img3 from "../assets/imgs/img3.jpg";
import img4 from "../assets/imgs/img4.jpg";
import img5 from "../assets/imgs/img5.jpg";
import img6 from "../assets/imgs/img6.jpg";
import img7 from "../assets/imgs/img7.jpg";
import img8 from "../assets/imgs/img8.jpg";
import img9 from "../assets/imgs/img9.jpg";
import img10 from "../assets/imgs/img10.jpg";
import BrasilColonia from "../topicSessions/BrasilColonia";
import BrasilImperio from "../topicSessions/BrasilImperio";
import Regencial from "../topicSessions/Regencia";
import Renascimento from "../topicSessions/Renascimento";
import EMaritima from "../topicSessions/EMaritima";
import RProtestante from "../topicSessions/RProtestante";
import RIndustrial from "../topicSessions/RIndustrial";
import RFrancesa from "../topicSessions/RFrancesa";
import RInglesa from "../topicSessions/RInglesa";
import { BsHourglassSplit } from "react-icons/bs";

function TimeLine() {
  const [hovered, setHovered] = React.useState<number | null>(null);
  const menu = [
    { src: img1, name: "Brasil Colônia", page: BrasilColonia }, // Aqui deve ser passado o componente diretamente
    { src: img3, name: "Brasil Império", page: BrasilImperio },
    { src: img4, name: "Período Regencial", page: Regencial },
    { src: img5, name: "Renascimento", page: Renascimento },
    { src: img6, name: "Expansão Marítima", page: EMaritima },
    { src: img7, name: "Reforma Protestente", page: RProtestante },
    { src: img8, name: "Revolução Industrial", page: RIndustrial },
    { src: img9, name: "Revolução Francesa", page: RFrancesa },
    { src: img10, name: "Revolução Inglesa", page: RInglesa },
  ];

  const [showContent, setShowContent] = React.useState<number | null>(null);
  const SelectedPage = showContent !== null ? menu[showContent].page : null;

  return (
    <AnimatedPage>
      <div className={styles.container}>
        <div className={styles.menu}>
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
            <p>Selecione um período histórico</p>
          </div>
        )}
      </div>
    </AnimatedPage>
  );
}

export default TimeLine;
