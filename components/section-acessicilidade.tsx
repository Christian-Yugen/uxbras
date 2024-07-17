import type { NextPage } from "next";
import styles from "./section-acessicilidade.module.css";

export type SectionAcessicilidadeType = {
  className?: string;
};

const SectionAcessicilidade: NextPage<SectionAcessicilidadeType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.sectionAcessicilidade, className].join(" ")}>
      <div className={styles.accessibilityTitle}>
        <div className={styles.accessibilityHeading}>
          <div className={styles.headingWrapper}>
            <h1 className={styles.acessibilidade}>Acessibilidade</h1>
          </div>
          <h1 className={styles.subtitulo}>Personalize a sua experiência</h1>
        </div>
      </div>
      <div className={styles.accessibilityTypeLinks}>
        <div className={styles.linkVisual}>
          <h2 className={styles.visual}>Visual</h2>
        </div>
        <div className={styles.linkAuditiva}>
          <h2 className={styles.visual1}>Auditiva</h2>
        </div>
        <div className={styles.linkMotora}>
          <h2 className={styles.visual2}>Motora</h2>
        </div>
        <div className={styles.linkNeurodiversa}>
          <h2 className={styles.visual3}>Neurodiversa</h2>
        </div>
      </div>
    </section>
  );
};

export default SectionAcessicilidade;
