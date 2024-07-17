import type { NextPage } from "next";
import DivlearningTestimonialCard from "./divlearning-testimonial-card";
import styles from "./section-testemunhos.module.css";

export type SectionTestemunhosType = {
  className?: string;
};

const SectionTestemunhos: NextPage<SectionTestemunhosType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.sectionTestemunhos, className].join(" ")}>
      <div className={styles.sectionCarousel}>
        <h1 className={styles.sectionHeading}>
          See what others are achieving through learning
        </h1>
      </div>
      <div className={styles.testimonialCards}>
        <div className={styles.sectionSectionCarousel}>
          <DivlearningTestimonialCard />
          <DivlearningTestimonialCard propMarginTop="unset" />
          <div className={styles.divlearningTestimonialCard}>
            <div className={styles.vectorParent}>
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
              <div className={styles.testimonialContentWrapperWrapper}>
                <div className={styles.testimonialContentWrapper}>
                  <div className={styles.authorCard}>
                    <img
                      className={styles.williamAWachlinjpegIcon}
                      loading="lazy"
                      alt=""
                      src="/william-a-wachlinjpeg@2x.png"
                    />
                    <div className={styles.authorNameDetails}>
                      <div className={styles.williamAWachlin}>
                        William A. Wachlin
                      </div>
                      <div className={styles.jobTitleWrapper}>
                        <div className={styles.partnerAccountManagerContainer}>
                          <p className={styles.partnerAccountManager}>
                            Partner Account Manager at Amazon
                          </p>
                          <p className={styles.webServices}>Web Services</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.ratingContainerWrapper}>
                    <div className={styles.ratingContainer}>
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
            <div className={styles.uxbrasGivesYouTheAbilityTWrapper}>
              <div className={styles.uxbrasGivesYouContainer}>
                <p className={styles.uxbrasGivesYou}>
                  UXBRAS gives you the ability to be
                </p>
                <p className={styles.persistentILearned}>
                  persistent. I learned exactly what I
                </p>
                <p className={styles.neededToKnow}>
                  needed to know in the real world. It
                </p>
                <p className={styles.helpedMeSellMyselfToGetA}>
                  <span>{`helped me sell myself to `}</span>
                  <b className={styles.getANew}>get a new role.</b>
                </p>
              </div>
            </div>
            <div className={styles.courseButtonDetails}>
              <div className={styles.linkView}>View this AWS course</div>
              <img className={styles.linkImg} alt="" src="/link--img-2.svg" />
            </div>
          </div>
          <div className={styles.divlearningTestimonialCard1}>
            <div className={styles.vectorGroup}>
              <img className={styles.vectorIcon1} alt="" src="/vector.svg" />
              <div className={styles.frameWrapper}>
                <div className={styles.frameParent}>
                  <div className={styles.ianStevenspngParent}>
                    <img
                      className={styles.ianStevenspngIcon}
                      loading="lazy"
                      alt=""
                      src="/ian-stevenspng@2x.png"
                    />
                    <div className={styles.ianStevensParent}>
                      <div className={styles.ianStevens}>Ian Stevens</div>
                      <div
                        className={styles.headOfCapabilityDevelopmentWrapper}
                      >
                        <div className={styles.headOfCapabilityContainer}>
                          <p className={styles.headOfCapability}>
                            Head of Capability Development,
                          </p>
                          <p className={styles.northAmericaAt}>
                            North America at Publicis Sapient
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameContainer}>
                    <div className={styles.star1Parent}>
                      <img
                        className={styles.star1Icon1}
                        alt=""
                        src="/star-1@2x.png"
                      />
                      <img
                        className={styles.star2Icon1}
                        alt=""
                        src="/star-1@2x.png"
                      />
                      <img
                        className={styles.star3Icon1}
                        alt=""
                        src="/star-1@2x.png"
                      />
                      <img
                        className={styles.star4Icon1}
                        alt=""
                        src="/star-1@2x.png"
                      />
                      <img
                        className={styles.star5Icon1}
                        alt=""
                        src="/star-1@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.withUxbrasBusinessEmployeesWrapper}>
              <div className={styles.withUxbrasBusinessContainer}>
                <p className={styles.withUxbrasBusiness}>
                  With UXBRAS Business employees were
                </p>
                <p className={styles.ableToMarry}>
                  able to marry the two together,
                </p>
                <p className={styles.technologyAndConsultant}>
                  technology and consultant soft skills... to
                </p>
                <p className={styles.helpDriveTheirCareersForwa}>
                  <span>{`help `}</span>
                  <b className={styles.driveTheirCareers}>
                    drive their careers forward.
                  </b>
                </p>
              </div>
            </div>
            <div className={styles.linkReadFullStoryParent}>
              <div className={styles.linkRead}>Read full story</div>
              <img className={styles.linkImg1} alt="" src="/link--img-3.svg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTestemunhos;
