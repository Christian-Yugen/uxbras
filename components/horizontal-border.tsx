import type { NextPage } from 'next';
import styles from './horizontal-border.module.css';

export type HorizontalBorderType = {
  className?: string;
  backgroundBorder?: string;
}



const HorizontalBorder:NextPage<HorizontalBorderType> = ({ className="", backgroundBorder }) => {
  return (
    <div className={[styles.horizontalborder, className].join(' ')}>
      <div className={styles.container} />
      <div className={styles.horizontalBorders}>
        <img className={styles.backgroundborderIcon} loading="lazy" alt="" src={backgroundBorder} />
      </div>
      <div className={styles.courseCardOne}>
        <div className={styles.courseInfoOne}>
          <b className={styles.r7499}>R$ 74.99</b>
        </div>
        <div className={styles.courseTitleOne}>
          <div className={styles.heading3}>
            <b className={styles.linkCommunication}>Communication Fundamentals: How To Communicate</b>
          </div>
          <div className={styles.container1}>
            <div className={styles.becomeAnEffective}>Become an Effective Communicator And Learn How to Get Your Message Across By Learning Communication Fundamentals</div>
          </div>
        </div>
        <div className={styles.starsOneParent}>
          <div className={styles.starsOne}>
            <img className={styles.ratingIcon} loading="lazy" alt="" src="/rating.svg" />
          </div>
          <div className={styles.dividerOne}>
            <b className={styles.enrolledCountOne}>5</b>
            <div className={styles.dividerTwoOne}>
              <div className={styles.studentsCountOne}>(231)</div>
            </div>
            <div className={styles.studentsCountTwoOne}>
              <div className={styles.divider} />
            </div>
          </div>
          <div className={styles.courseStatsOne}>
            <div className={styles.courses}>10 Courses</div>
            <div className={styles.enrolledDividerOne}>
              <div className={styles.divider1} />
            </div>
            <div className={styles.users}>14 Users</div>
          </div>
        </div>
      </div>
    </div>);
};

export default HorizontalBorder;
