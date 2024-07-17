import type { NextPage } from "next";
import styles from "./course-action.module.css";

export type CourseActionType = {
  className?: string;
  viewFeatures?: string;
  strikethrough7499?: string;
};

const CourseAction: NextPage<CourseActionType> = ({
  className = "",
  viewFeatures,
  strikethrough7499,
}) => {
  return (
    <div className={[styles.courseAction, className].join(" ")}>
      <div className={styles.courseButtonDetails}>
        <b className={styles.viewFeatures}>{viewFeatures}</b>
        <div className={styles.originalPriceContainer}>
          <div className={styles.strikethrough7499}>{strikethrough7499}</div>
        </div>
      </div>
      <div className={styles.saveCourseButton}>
        <button className={styles.buttonactive}>
          <div className={styles.moreFeatures}>More Features</div>
        </button>
        <div className={styles.frameLove}>
          <img
            className={styles.materialSymbolsfavoriteOutlIcon}
            loading="lazy"
            alt=""
            src="/materialsymbolsfavoriteoutlinerounded.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default CourseAction;
