import type { NextPage } from 'next';
import styles from './courses-content.module.css';

export type CoursesContentType = {
  className?: string;
}



const CoursesContent:NextPage<CoursesContentType> = ({ className="" }) => {
  return (
    <div className={[styles.coursesContent, className].join(' ')}>
      <div className={styles.coursesHeader}>
        <div className={styles.newCourses}>
          <h1 className={styles.newOnUxbrasContainer}>
            <b>{`New on `}</b>
            <b className={styles.uxbras}>UXBRAS</b>
          </h1>
        </div>
        <div className={styles.courseTabsContainer}>
          <div className={styles.sectionTablist}>
            <div className={styles.divudNavButtonContainer}>
              <b className={styles.tabData}>Data Science</b>
            </div>
            <div className={styles.tabItems}>
              <b className={styles.tabIt}>IT Certifications</b>
            </div>
            <div className={styles.tabItems1}>
              <b className={styles.tabLeadership}>Leadership</b>
            </div>
            <div className={styles.webDevTab}>
              <b className={styles.tabWeb}>Web Development</b>
            </div>
            <div className={styles.communicationTab}>
              <div className={styles.communicationContainer}>
                <div className={styles.communicationItem}>
                  <b className={styles.tabCommunication}>Communication</b>
                </div>
                <b className={styles.tabBusiness}>{`Business Analytics & Intelligence`}</b>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.exploreButton}>
          <div className={styles.linkButon}>
            <div className={styles.exploreMoreExecutive}>Explore more Executive Education</div>
          </div>
          <div className={styles.courseCarousels}>
            <div className={styles.wrapperSectionSectionCa}>
              <img className={styles.sectionSectionCarousel} loading="lazy" alt="" src="/section--section--carousel--button.svg" />
            </div>
            <div className={styles.wrapperSectionSectionCa1}>
              <img className={styles.sectionSectionCarousel1} alt="" src="/section--section--carousel--button-1.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>);
};

export default CoursesContent;
