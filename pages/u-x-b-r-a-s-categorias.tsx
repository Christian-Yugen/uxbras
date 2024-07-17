import type { NextPage } from 'next';
import FrameComponent1 from "../components/frame-component1";
import CoursesContent from "../components/courses-content";
import FeaturedCourse from "../components/featured-course";
import CourseGrid from "../components/course-grid";
import TopicFilter from "../components/topic-filter";
import FrameComponent from "../components/frame-component";
import SectionSubscribeFooter from "../components/section-subscribe-footer";
import BackgroundHorizontalBorder from "../components/background-horizontal-border";
import styles from './u-x-b-r-a-s-categorias.module.css';


const UXBRASCategorias:NextPage = () => {
  return (
    <div className={styles.uxbrasCategorias}><FrameComponent1 />
      <section className={styles.sectionCursos}><CoursesContent /><FeaturedCourse />
      </section>
      <section className={styles.sectionCursos1}>
        <h1 className={styles.webDesignCourses}>Web Design Courses</h1>
        <div className={styles.webDesignContent}><CourseGrid /><TopicFilter />
        </div>
      </section><FrameComponent />
      <section className={styles.footer}><SectionSubscribeFooter /><BackgroundHorizontalBorder />
      </section>
    </div>);
};

export default UXBRASCategorias;
