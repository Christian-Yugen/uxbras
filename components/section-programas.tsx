import type { NextPage } from "next";
import styles from "./section-programas.module.css";

export type SectionProgramasType = {
  className?: string;
};

const SectionProgramas: NextPage<SectionProgramasType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.sectionProgramas, className].join(" ")}>
      <h1 className={styles.heading2}>Cursos disponiveis</h1>
      <div className={styles.programLinks}>
        <div className={styles.link}>
          <b className={styles.pmiProjectManagementContainer}>
            <p className={styles.pmiProjectManagement}>
              PMI Project Management
            </p>
            <p className={styles.professionalPmp}>Professional (PMP)</p>
          </b>
        </div>
        <div className={styles.link1}>
          <b className={styles.projectManagement}>Project Management</b>
        </div>
        <div className={styles.link2}>
          <b className={styles.dataModeling}>Data Modeling</b>
        </div>
        <div className={styles.link3}>
          <b className={styles.businessAnalysis}>Business Analysis</b>
        </div>
        <div className={styles.link4}>
          <b className={styles.dataAnalysis}>Data Analysis</b>
        </div>
        <div className={styles.link5}>
          <b className={styles.microsoftPowerBi}>Microsoft Power BI</b>
        </div>
        <div className={styles.link6}>
          <b className={styles.sql}>SQL</b>
        </div>
        <div className={styles.link7}>
          <b className={styles.pmiPmbok}>PMI PMBOK</b>
        </div>
        <div className={styles.link8}>
          <b className={styles.realEstateInvesting}>Real Estate Investing</b>
        </div>
        <div className={styles.link9}>
          <b className={styles.pmiCertifiedAssociateContainer}>
            <p className={styles.pmiCertifiedAssociate}>
              PMI Certified Associate in
            </p>
            <p className={styles.projectManagemet}>Project Managemet</p>
          </b>
        </div>
      </div>
    </section>
  );
};

export default SectionProgramas;
