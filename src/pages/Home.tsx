import React from "react";
import styles from "./styles/Home.module.css";
import AnimatedPage from "../components/animations/AnimatedPage";

function Home() {
  return (
    <AnimatedPage>
      <div className={styles.container}>
        <div className={styles.contentLeft}>
          Proin porta, enim in maximus tempor, lectus diam mattis metus, et
          mattis sapien sapien ac nulla. Vestibulum ut nunc et metus viverra
          faucibus. Proin et leo nunc. Nulla facilisi. Aenean nec venenatis
          magna, pharetra consectetur nisi. Morbi a enim at augue convallis
          volutpat et id nunc. Curabitur eu gravida massa. Nunc et elit euismod,
          ultricies arcu at, mollis augue. Donec venenatis mauris quis turpis
          aliquam dignissim. Aliquam erat volutpat. Nullam id malesuada est.
        </div>
        <div className={styles.contentCenter}>
          Nam nisl leo, luctus ut cursus ut, tristique et tortor. Phasellus vel
          congue magna. Quisque euismod lorem quis lectus malesuada volutpat. In
          scelerisque justo id justo laoreet fermentum. Suspendisse nec posuere
          est, eu molestie orci. Donec eu magna in nulla efficitur semper in non
          arcu. Proin egestas dapibus faucibus. In vel vestibulum mauris.
        </div>
        <div className={styles.contentRight}>
          {" "}
          Proin porta, enim in maximus tempor, lectus diam mattis metus, et
          mattis sapien sapien ac nulla. Vestibulum ut nunc et metus viverra
          faucibus. Proin et leo nunc. Nulla facilisi. Aenean nec venenatis
          magna, pharetra consectetur nisi. Morbi a enim at augue convallis
          volutpat et id nunc. Curabitur eu gravida massa. Nunc et elit euismod,
          ultricies arcu at, mollis augue. Donec venenatis mauris quis turpis
          aliquam dignissim. Aliquam erat volutpat. Nullam id malesuada est.
        </div>
      </div>
    </AnimatedPage>
  );
}

export default Home;
