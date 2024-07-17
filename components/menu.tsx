import type { NextPage } from "next";
import styles from "./menu.module.css";

export type MenuType = {
  className?: string;
};

const Menu: NextPage<MenuType> = ({ className = "" }) => {
  return (
    <header className={[styles.menu, className].join(" ")}>
      <div className={styles.divsmartBarModuleSmartBa}>
        <div className={styles.visualLink}>
          <a className={styles.acessibilidade}>Acessibilidade</a>
        </div>
        <div className={styles.neurodiversityLink}>
          <a className={styles.linkVisual}>Visual</a>
        </div>
        <div className={styles.linkAuditivaWrapper}>
          <a className={styles.linkAuditiva}>Auditiva</a>
        </div>
        <div className={styles.linkMobilidadeWrapper}>
          <a className={styles.linkMobilidade}>Mobilidade</a>
        </div>
        <div className={styles.linkCognitivaWrapper}>
          <a className={styles.linkCognitiva}>Cognitiva</a>
        </div>
        <a className={styles.linkNerodiversidade}>Nerodiversidade</a>
      </div>
      <div className={styles.divudHeader}>
        <div className={styles.logoWrapperWrapper}>
          <div className={styles.logoWrapper}>
            <div className={styles.logouxbrasWrapper}>
              <img
                className={styles.logouxbrasIcon}
                loading="lazy"
                alt=""
                src="/logouxbras@2x.png"
              />
            </div>
            <button className={styles.link}>
              <a className={styles.catalogo}>Catálogo</a>
            </button>
          </div>
        </div>
        <div className={styles.divudSearchFormAutocompletWrapper}>
          <div className={styles.divudSearchFormAutocomplet}>
            <img
              className={styles.formButtonImgSubmitS}
              alt=""
              src="/form--button--img--submit-search.svg"
            />
            <input
              className={styles.searchPlaceholder}
              placeholder="Quer aprender o quer hoje?"
              type="text"
            />
          </div>
        </div>
        <div className={styles.authLinksWrapper}>
          <div className={styles.authLinks}>
            <div className={styles.pricingLink}>
              <a className={styles.linkPlansContainer}>
                <b className={styles.uxbras}>UXBRAS</b>
                <span className={styles.forBusiness}> for Business</span>
              </a>
            </div>
            <button className={styles.link1}>
              <b className={styles.entrar}>Entrar</b>
            </button>
            <button className={styles.link2}>
              <a className={styles.inscrevaSe}>Inscreva-se</a>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Menu;
