import type { NextPage } from "next";
import CourseAction from "./course-action";
import styles from "./section-cursos.module.css";

export type SectionCursosType = {
  className?: string;
};

const SectionCursos: NextPage<SectionCursosType> = ({ className = "" }) => {
  return (
    <section className={[styles.sectionCursos, className].join(" ")}>
      <div className={styles.coursesContent}>
        <div className={styles.coursesHeading}>
          <div className={styles.newOnUxbrasWrapper}>
            <h1 className={styles.newOnUxbrasContainer}>
              <b>{`New on `}</b>
              <b className={styles.uxbras}>UXBRAS</b>
            </h1>
          </div>
          <div className={styles.courseCategories}>
            <div className={styles.sectionTablist}>
              <div className={styles.divudNavButtonContainer}>
                <b className={styles.tabData}>Data Science</b>
              </div>
              <div className={styles.tabHeaders}>
                <b className={styles.tabIt}>IT Certifications</b>
              </div>
              <div className={styles.tabHeaders1}>
                <b className={styles.tabLeadership}>Leadership</b>
              </div>
              <div className={styles.webDevelopmentButton}>
                <b className={styles.tabWeb}>Web Development</b>
              </div>
              <div className={styles.communicationButton}>
                <div className={styles.communicationWrapperParent}>
                  <div className={styles.communicationWrapper}>
                    <b className={styles.tabCommunication}>Communication</b>
                  </div>
                  <b
                    className={styles.tabBusiness}
                  >{`Business Analytics & Intelligence`}</b>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.exploreButton}>
            <div className={styles.linkButon}>
              <div className={styles.exploreMoreExecutive}>
                Explore more Executive Education
              </div>
            </div>
            <div className={styles.courseCarousel}>
              <div className={styles.wrapperSectionSectionCa}>
                <img
                  className={styles.sectionSectionCarousel}
                  loading="lazy"
                  alt=""
                  src="/section--section--carousel--button.svg"
                />
              </div>
              <div className={styles.wrapperSectionSectionCa1}>
                <img
                  className={styles.sectionSectionCarousel1}
                  alt=""
                  src="/section--section--carousel--button-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.courseCard}>
        <div className={styles.link1}>
          <img
            className={styles.containerIcon}
            loading="lazy"
            alt=""
            src="/container@2x.png"
          />
          <div className={styles.courseDetails}>
            <div className={styles.courseInfo}>
              <b className={styles.theCompleteAiPoweredContainer}>
                <p className={styles.theCompleteAiPowered}>
                  The Complete AI-Powered
                </p>
                <p
                  className={styles.copywritingCourse}
                >{`Copywriting Course & ChatGPT…`}</p>
              </b>
              <div className={styles.instructorNames}>
                <div className={styles.ingTomasMoravek}>
                  Ing. Tomas Moravek, Learn Digital…
                </div>
              </div>
              <div className={styles.courseInfo1}>
                <div className={styles.courseDetails1}>
                  <b className={styles.authorName}>4.5</b>
                  <img className={styles.svgIcon} alt="" src="/svg.svg" />
                  <div className={styles.reviewCountContainer}>
                    <div className={styles.kReviews}>(134K reviews)</div>
                  </div>
                </div>
                <CourseAction
                  viewFeatures="$14.82"
                  strikethrough7499="$75.99"
                />
              </div>
            </div>
          </div>
          <div className={styles.wrapperSectionSectionCa2}>
            <img
              className={styles.sectionSectionCarousel2}
              alt=""
              src="/section--section--carousel--button-2.svg"
            />
          </div>
        </div>
        <div className={styles.link2}>
          <img
            className={styles.containerIcon1}
            alt=""
            src="/container-1@2x.png"
          />
          <div className={styles.link2Inner}>
            <div className={styles.chatgptCompleteGuideLearnParent}>
              <b
                className={styles.chatgptCompleteGuide}
              >{`ChatGPT Complete Guide: Learn Midjourney, ChatGPT 4 & More`}</b>
              <div className={styles.julianMelansonBenzaMamanParent}>
                <div className={styles.julianMelansonBenza}>
                  Julian Melanson, Benza Maman, Leap…
                </div>
                <div className={styles.reviewIconParent}>
                  <b className={styles.reviewIcon}>4.8</b>
                  <div className={styles.svgWrapper}>
                    <img className={styles.svgIcon1} alt="" src="/svg-1.svg" />
                  </div>
                  <div className={styles.reviewNumbers}>
                    <a className={styles.kReviews1}>(304K reviews)</a>
                  </div>
                </div>
                <div className={styles.pricing}>
                  <div className={styles.priceInfo}>
                    <b className={styles.originalPrice}>$12.75</b>
                    <div className={styles.discountPrice}>
                      <div className={styles.strikethrough7499}>$78.59</div>
                    </div>
                  </div>
                  <div className={styles.courseButton}>
                    <button className={styles.buttonactive}>
                      <div className={styles.moreFeatures}>More Features</div>
                    </button>
                    <div className={styles.frameLove}>
                      <img
                        className={styles.materialSymbolsfavoriteOutlIcon}
                        alt=""
                        src="/materialsymbolsfavoriteoutlinerounded.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.link3}>
          <img
            className={styles.containerIcon2}
            alt=""
            src="/container-2@2x.png"
          />
          <div className={styles.link3Inner}>
            <div className={styles.chatgptMidjourneyPersonalParent}>
              <b
                className={styles.chatgptMidjourney}
              >{`ChatGPT & Midjourney: Personal Digital Marketing Assistants`}</b>
              <div className={styles.antonVoroniukAntonVoroniukParent}>
                <div className={styles.antonVoroniukAnton}>
                  Anton Voroniuk, Anton Voroniuk Suppor…
                </div>
                <div className={styles.parent}>
                  <b className={styles.b}>4.0</b>
                  <div className={styles.svgContainer}>
                    <img className={styles.svgIcon2} alt="" src="/svg-1.svg" />
                  </div>
                  <div className={styles.kReviewsWrapper}>
                    <div className={styles.kReviews2}>(144K reviews)</div>
                  </div>
                </div>
                <div className={styles.frameParent}>
                  <div className={styles.group}>
                    <b className={styles.b1}>$20.98</b>
                    <div className={styles.strikethrough7499Wrapper}>
                      <div className={styles.strikethrough74991}>$89.99</div>
                    </div>
                  </div>
                  <div className={styles.buttonactiveParent}>
                    <button className={styles.buttonactive1}>
                      <div className={styles.moreFeatures1}>More Features</div>
                    </button>
                    <div className={styles.frameLove1}>
                      <img
                        className={styles.materialSymbolsfavoriteOutlIcon1}
                        alt=""
                        src="/materialsymbolsfavoriteoutlinerounded.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.link4}>
          <img
            className={styles.containerIcon3}
            alt=""
            src="/container-3@2x.png"
          />
          <div className={styles.link4Inner}>
            <div className={styles.frameGroup}>
              <div className={styles.theCompleteAiPoweredCopywrParent}>
                <b className={styles.theCompleteAiPoweredContainer1}>
                  <p className={styles.theCompleteAiPowered1}>
                    The Complete AI-Powered
                  </p>
                  <p
                    className={styles.copywritingCourse1}
                  >{`Copywriting Course & ChatGPT…`}</p>
                </b>
                <div className={styles.academindByMaximilian}>
                  Academind by Maximilian Schwarzmüll…
                </div>
              </div>
              <div className={styles.container}>
                <b className={styles.b2}>5.0</b>
                <div className={styles.svgFrame}>
                  <img className={styles.svgIcon3} alt="" src="/svg-1.svg" />
                </div>
                <div className={styles.kReviewsContainer}>
                  <div className={styles.kReviews3}>(250K reviews)</div>
                </div>
              </div>
              <CourseAction viewFeatures="$21.95" strikethrough7499="$72.45" />
            </div>
          </div>
          <div className={styles.wrapperSectionSectionCa3}>
            <img
              className={styles.sectionSectionCarousel3}
              alt=""
              src="/section--section--carousel--button-3.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionCursos;
