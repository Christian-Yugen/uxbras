import type { NextPage } from "next";
import Menu from "../components/menu";
import SectionParceiros from "../components/section-parceiros";
import SectionAcessicilidade from "../components/section-acessicilidade";
import SectionLaise from "../components/section-laise";
import SectionCursos from "../components/section-cursos";
import SectionProgramas from "../components/section-programas";
import SectionTestemunhos from "../components/section-testemunhos";
import SectionSubscribeFooter from "../components/section-subscribe-footer";
import BackgroundHorizontalBorder from "../components/background-horizontal-border";
import styles from "./index.module.css";

const UXBRASHome: NextPage = () => {
  return (
    <div className={styles.uxbrasHome}>
      <div className={styles.mainContent}>
        <img
          className={styles.sliderSectionIcon}
          loading="lazy"
          alt=""
          src="/slidersection.svg"
        />
      </div>
      <div className={styles.header}>
        <Menu />
        <main className={styles.content}>
          <SectionParceiros />
          <SectionAcessicilidade />
          <SectionLaise />
          <SectionCursos />
          <SectionProgramas />
          <SectionTestemunhos />
          <SectionSubscribeFooter />
          <BackgroundHorizontalBorder />
        </main>
      </div>
    </div>
  );
};

export default UXBRASHome;
