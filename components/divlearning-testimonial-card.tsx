import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./divlearning-testimonial-card.module.css";

export type DivlearningTestimonialCardType = {
  className?: string;

  /** Style props */
  propMarginTop?: CSSProperties["marginTop"];
};

const DivlearningTestimonialCard: NextPage<DivlearningTestimonialCardType> = ({
  className = "",
  propMarginTop,
}) => {
  const divlearningTestimonialCardStyle: CSSProperties = useMemo(() => {
    return {
      marginTop: propMarginTop,
    };
  }, [propMarginTop]);

  return (
    <div
      className={[styles.divlearningTestimonialCard, className].join(" ")}
      style={divlearningTestimonialCardStyle}
    >
      <div className={styles.testimonialCard}>
        <div className={styles.testimonialContent}>
          <img
            className={styles.testimonialQuoteIcon}
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
          <div className={styles.testimonialAuthor}>
            <div className={styles.authorDetails}>
              <div className={styles.authorInfo}>
                <img
                  className={styles.alvinLimjpegIcon}
                  loading="lazy"
                  alt=""
                  src="/alvin-limjpeg@2x.png"
                />
                <div className={styles.authorNameContainer}>
                  <div className={styles.alvinLim}>Alvin Lim</div>
                  <div className={styles.authorProfessionContainer}>
                    <div className={styles.technicalCoFounderCtoContainer}>
                      <p className={styles.technicalCoFounderCto}>
                        Technical Co-Founder, CTO at
                      </p>
                      <p className={styles.dimensional}>Dimensional</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.testimonialRating}>
                <div className={styles.ratingStars}>
                  <img
                    className={styles.star1Icon}
                    alt=""
                    src="/star-1@2x.png"
                  />
                  <img
                    className={styles.star2Icon}
                    alt=""
                    src="/star-1@2x.png"
                  />
                  <img
                    className={styles.star3Icon}
                    alt=""
                    src="/star-1@2x.png"
                  />
                  <img
                    className={styles.star4Icon}
                    alt=""
                    src="/star-1@2x.png"
                  />
                  <img
                    className={styles.star5Icon}
                    alt=""
                    src="/star-1@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.uxbrasWasTrulyContainer}>
          <p className={styles.uxbrasWasTrulyAGameChange}>
            <span className={styles.uxbrasWasTruly}>{`UXBRAS was truly `}</span>
            <b className={styles.aGameChangerAnd}>
              a game-changer and a great guide
            </b>
            <span> for me as we brought</span>
          </p>
          <p className={styles.dimensionalToLife}>Dimensional to life.</p>
        </div>
      </div>
      <div className={styles.testimonialAction}>
        <div className={styles.linkView}>{`View this iOS & Swift course`}</div>
        <img className={styles.linkImg} alt="" src="/link--img.svg" />
      </div>
    </div>
  );
};

export default DivlearningTestimonialCard;
