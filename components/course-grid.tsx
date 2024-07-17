import type { NextPage } from 'next';
import HorizontalBorder from "./horizontal-border";
import styles from './course-grid.module.css';

export type CourseGridType = {
  className?: string;
}



const CourseGrid:NextPage<CourseGridType> = ({ className="" }) => {
  return (
    <div className={[styles.courseGrid, className].join(' ')}><HorizontalBorder backgroundBorder="/backgroundborder@2x.png" /><HorizontalBorder backgroundBorder="/backgroundborder-1@2x.png" /><HorizontalBorder backgroundBorder="/backgroundborder-2@2x.png" />
      <div className={styles.horizontalborder}>
        <div className={styles.container} />
        <div className={styles.backgroundborderWrapper}>
          <img className={styles.backgroundborderIcon} alt="" src="/backgroundborder-3@2x.png" />
        </div>
        <div className={styles.frameParent}>
          <div className={styles.r7499Wrapper}>
            <b className={styles.r7499}>R$ 74.99</b>
          </div>
          <div className={styles.heading3Parent}>
            <div className={styles.heading3}>
              <b className={styles.linkCommunication}>Communication Fundamentals: How To Communicate</b>
            </div>
            <div className={styles.container1}>
              <div className={styles.becomeAnEffective}>Become an Effective Communicator And Learn How to Get Your Message Across By Learning Communication Fundamentals</div>
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.ratingWrapper}>
              <img className={styles.ratingIcon} alt="" src="/rating.svg" />
            </div>
            <b className={styles.b}>5</b>
            <div className={styles.parent}>
              <div className={styles.div}>(231)</div>
              <div className={styles.dividerWrapper}>
                <div className={styles.divider} />
              </div>
            </div>
            <div className={styles.singleCourseStats}>
              <div className={styles.courses}>10 Courses</div>
              <div className={styles.lastEnrolledDivider}>
                <div className={styles.divider1} />
              </div>
              <div className={styles.users}>14 Users</div>
            </div>
          </div>
        </div>
      </div>
    </div>);
};

export default CourseGrid;
