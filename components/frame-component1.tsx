import type { NextPage } from 'next';
import styles from './frame-component1.module.css';

export type FrameComponent1Type = {
  className?: string;
}



const FrameComponent1:NextPage<FrameComponent1Type> = ({ className="" }) => {
  return (
    <header className={[styles.menuParent, className].join(' ')}>
      <div className={styles.menu}>
        <div className={styles.divsmartBarModuleSmartBa}>
          <div className={styles.acessibilidadeWrapper}>
            <a className={styles.acessibilidade}>Acessibilidade</a>
          </div>
          <div className={styles.linkVisualWrapper}>
            <a className={styles.linkVisual}>Visual</a>
          </div>
          <div className={styles.accessibilityLinks}>
            <a className={styles.linkAuditiva}>Auditiva</a>
          </div>
          <div className={styles.accessibilityLinks1}>
            <a className={styles.linkMobilidade}>Mobilidade</a>
          </div>
          <div className={styles.accessibilityLinks2}>
            <a className={styles.linkCognitiva}>Cognitiva</a>
          </div>
          <a className={styles.linkNerodiversidade}>Nerodiversidade</a>
        </div>
        <div className={styles.divudHeader}>
          <div className={styles.headerContent}>
            <div className={styles.logoContainer}>
              <div className={styles.logouxbrasWrapper}>
                <img className={styles.logouxbrasIcon} loading="lazy" alt="" src="/logouxbras@2x.png" />
              </div>
              <button className={styles.link}>
                <a className={styles.catalogo}>Catálogo</a>
              </button>
            </div>
          </div>
          <div className={styles.searchContainer}>
            <div className={styles.divudSearchFormAutocomplet}>
              <img className={styles.formButtonImgSubmitS} alt="" src="/form--button--img--submit-search.svg" />
              <input className={styles.searchPlaceholder} placeholder="Quer aprender o quer hoje?" type="text" />
            </div>
          </div>
          <div className={styles.userActions}>
            <div className={styles.actionLinks}>
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
      </div>
      <div className={styles.background}>
        <div className={styles.heroItems}>
          <a className={styles.home}>Home</a>
        </div>
        <div className={styles.heroItems1}>
          <div className={styles.symbol}></div>
        </div>
        <div className={styles.heroItems2}>
          <a className={styles.courses}>Courses</a>
        </div>
        <div className={styles.heroItems3}>
          <div className={styles.symbol1}></div>
        </div>
        <a className={styles.development}>Development</a>
        <div className={styles.heroItems4}>
          <div className={styles.symbol2}></div>
        </div>
        <div className={styles.itemHow}>Craft Daily Objects Modelling and Lighting with Blender</div>
      </div>
    </header>);
};

export default FrameComponent1;
