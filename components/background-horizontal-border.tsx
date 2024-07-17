import type { NextPage } from "next";
import styles from "./background-horizontal-border.module.css";

export type BackgroundHorizontalBorderType = {
  className?: string;
};

const BackgroundHorizontalBorder: NextPage<BackgroundHorizontalBorderType> = ({
  className = "",
}) => {
  return (
    <footer
      className={[styles.backgroundhorizontalborder, className].join(" ")}
    >
      <div className={styles.footerContent}>
        <div className={styles.footerColumns}>
          <div className={styles.logoUdemyInvertedsvgFill}>
            <div className={styles.logoUdemyInvertedsvg}>
              <img
                className={styles.lwhite1Icon}
                alt=""
                src="/450-lwhite-1@2x.png"
              />
            </div>
          </div>
          <div className={styles.appDownload}>
            <div className={styles.downloadLinks}>
              <div className={styles.availability}>
                <div className={styles.emBreve}>Em breve:</div>
              </div>
              <div className={styles.storeButtons}>
                <img
                  className={styles.imageGooglePlay}
                  loading="lazy"
                  alt=""
                  src="/image-google-play@2x.png"
                />
                <img
                  className={styles.imageAppStore}
                  loading="lazy"
                  alt=""
                  src="/image-app-store@2x.png"
                />
              </div>
            </div>
          </div>
          <div className={styles.copyright}>
            <div className={styles.uxbrasInc}>
              <span>{`© 2021 `}</span>
              <b className={styles.uxbras}>UXBRAS</b>
              <span>. All right reserved.</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerLinks}>
        <div className={styles.aboutUsColumn}>
          <b className={styles.moreAboutUs}>More about Us</b>
          <div className={styles.linkList}>
            <a className={styles.itemLink}>About us</a>
            <div className={styles.itemLink1}>Contact us</div>
            <div className={styles.itemLink2}>O que oferecemos</div>
            <div className={styles.itemLink3}>Seja parceiro</div>
            <div className={styles.itemLink4}>Para Empresas</div>
            <a className={styles.itemLink5}>Para Campus</a>
            <div className={styles.itemLink6}>Seja Governo</div>
          </div>
        </div>
        <div className={styles.legalContainer}>
          <b className={styles.legal}>Connect</b>
          <div className={styles.legalLinks}>
            <div className={styles.itemLink7}>Blog</div>
            <div className={styles.itemLink8}>Careers</div>
            <div className={styles.itemLink9}>Help and Support</div>
            <div className={styles.itemLink10}>Security</div>
            <div className={styles.itemLink11}>Parceiros</div>
            <div className={styles.itemLink12}>Investors</div>
          </div>
        </div>
        <div className={styles.policyContainer}>
          <b className={styles.legal1}>Legal</b>
          <div className={styles.policyLinks}>
            <div className={styles.itemLink13}>Terms of Services</div>
            <a className={styles.itemLink14}>Privacy policy</a>
            <div className={styles.itemLink15}>Cookie Policy</div>
            <div className={styles.itemLink16}>Accessibility statement</div>
          </div>
        </div>
      </div>
      <img
        className={styles.traduzir1Icon}
        loading="lazy"
        alt=""
        src="/traduzir-1@2x.png"
      />
    </footer>
  );
};

export default BackgroundHorizontalBorder;
