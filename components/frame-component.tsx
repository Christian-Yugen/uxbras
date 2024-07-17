import type { NextPage } from 'next';
import styles from './frame-component.module.css';

export type FrameComponentType = {
  className?: string;
}



const FrameComponent:NextPage<FrameComponentType> = ({ className="" }) => {
  return (
    <section className={[styles.sectionProgramasWrapper, className].join(' ')}>
      <div className={styles.sectionProgramas}>
        <h1 className={styles.heading2}>Cursos disponiveis</h1>
        <div className={styles.container}>
          <div className={styles.linkParent}>
            <div className={styles.link}>
              <b className={styles.pmiProjectManagementContainer}>
                <p className={styles.pmiProjectManagement}>PMI Project Management</p>
                <p className={styles.professionalPmp}>Professional (PMP)</p>
              </b>
            </div>
            <div className={styles.link1}>
              <b className={styles.microsoftPowerBi}>Microsoft Power BI</b>
            </div>
          </div>
          <div className={styles.linkGroup}>
            <div className={styles.link2}>
              <b className={styles.projectManagement}>Project Management</b>
            </div>
            <div className={styles.link3}>
              <b className={styles.sql}>SQL</b>
            </div>
          </div>
          <div className={styles.linkContainer}>
            <div className={styles.link4}>
              <b className={styles.dataModeling}>Data Modeling</b>
            </div>
            <div className={styles.link5}>
              <b className={styles.pmiPmbok}>PMI PMBOK</b>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.link6}>
              <b className={styles.businessAnalysis}>Business Analysis</b>
            </div>
            <div className={styles.link7}>
              <b className={styles.realEstateInvesting}>Real Estate Investing</b>
            </div>
          </div>
          <div className={styles.linkParent1}>
            <div className={styles.link8}>
              <b className={styles.dataAnalysis}>Data Analysis</b>
            </div>
            <div className={styles.link9}>
              <b className={styles.pmiCertifiedAssociateContainer}>
                <p className={styles.pmiCertifiedAssociate}>PMI Certified Associate in</p>
                <p className={styles.projectManagement1}>Project Management</p>
                <p className={styles.capm}>(CAPM)</p>
              </b>
            </div>
          </div>
        </div>
      </div>
    </section>);
};

export default FrameComponent;
