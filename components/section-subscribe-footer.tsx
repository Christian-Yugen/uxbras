import type { NextPage } from "next";
import styles from "./section-subscribe-footer.module.css";

export type SectionSubscribeFooterType = {
  className?: string;
};

const SectionSubscribeFooter: NextPage<SectionSubscribeFooterType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.sectionSubscribeFooter, className].join(" ")}>
      <div className={styles.newsletter}>
        <b className={styles.querReceberO}>Quer receber o newsletter?</b>
        <div className={styles.sejaOPrimeiroContainer}>
          <span>{`Seja o primeiro a receber as últimas novidades sobre a `}</span>
          <span className={styles.uxbras}>
            <b>UXBRAS</b>
            <span className={styles.span}>.</span>
          </span>
        </div>
      </div>
      <div className={styles.emailInput}>
        <div className={styles.input}>
          <input
            className={styles.emailAddress}
            placeholder="Email Address"
            type="text"
          />
        </div>
      </div>
      <div className={styles.button}>
        <div className={styles.subscribeToNewsletter}>
          Subscribe To Newsletter
        </div>
      </div>
    </section>
  );
};

export default SectionSubscribeFooter;
