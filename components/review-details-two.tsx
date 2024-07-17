import type { NextPage } from 'next';
import styles from './review-details-two.module.css';

export type ReviewDetailsTwoType = {
  className?: string;
  emptySpan?: string;
  strikethrough7499?: string;
}



const ReviewDetailsTwo:NextPage<ReviewDetailsTwoType> = ({ className="", emptySpan, strikethrough7499 }) => {
  return (
    <div className={[styles.reviewDetailsTwo, className].join(' ')}>
      <div className={styles.reviewEmpty}>
        <b className={styles.emptySpan}>{emptySpan}</b>
        <div className={styles.secondStrikethrough}>
          <div className={styles.strikethrough7499}>{strikethrough7499}</div>
        </div>
      </div>
      <div className={styles.secondFeatures}>
        <button className={styles.buttonactive}>
          <div className={styles.moreFeatures}>More Features</div>
        </button>
        <div className={styles.frameLove}>
          <img className={styles.materialSymbolsfavoriteOutlIcon} loading="lazy" alt="" src="/materialsymbolsfavoriteoutlinerounded.svg" />
        </div>
      </div>
    </div>);
};

export default ReviewDetailsTwo;
