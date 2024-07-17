import type { NextPage } from "next";
import styles from "./section-parceiros.module.css";

export type SectionParceirosType = {
  className?: string;
};

const SectionParceiros: NextPage<SectionParceirosType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.sectionParceiros, className].join(" ")}>
      <div className={styles.partnersTitle}>
        <h2 className={styles.credibilidadeEParcerias}>
          Credibilidade e parcerias de sucesso
        </h2>
      </div>
      <div className={styles.container}>
        <div className={styles.logoGrid}>
          <img
            className={styles.fundectIcon}
            loading="lazy"
            alt=""
            src="/fundect@2x.png"
          />
          <img
            className={styles.centelhaMsIcon}
            loading="lazy"
            alt=""
            src="/centelha-ms@2x.png"
          />
          <img
            className={styles.mctiIcon}
            loading="lazy"
            alt=""
            src="/mcti@2x.png"
          />
          <img
            className={styles.microsoftIcon}
            loading="lazy"
            alt=""
            src="/microsoft@2x.png"
          />
        </div>
        <img className={styles.copilotIcon} alt="" src="/copilot@2x.png" />
        <div className={styles.morePartners}>
          <img className={styles.ufmsIcon} alt="" src="/ufms@2x.png" />
          <img
            className={styles.pimeIcon}
            loading="lazy"
            alt=""
            src="/pime@2x.png"
          />
          <img
            className={styles.certiIcon}
            loading="lazy"
            alt=""
            src="/certi@2x.png"
          />
          <img
            className={styles.finepIcon}
            loading="lazy"
            alt=""
            src="/finep@2x.png"
          />
          <img
            className={styles.msForStartup}
            loading="lazy"
            alt=""
            src="/ms-for-startup@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionParceiros;
