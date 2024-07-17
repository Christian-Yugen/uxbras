import type { NextPage } from "next";
import styles from "./section-laise.module.css";

export type SectionLaiseType = {
  className?: string;
};

const SectionLaise: NextPage<SectionLaiseType> = ({ className = "" }) => {
  return (
    <section className={[styles.sectionLaise, className].join(" ")}>
      <div className={styles.laiseIa} />
      <div className={styles.laiseDescription}>
        <h1 className={styles.laiseAIa}>Laise: a IA Inclusive</h1>
      </div>
      <div className={styles.partnership}>
        <h3 className={styles.aLaiseFoiContainer}>
          <span>{`A Laise foi desenvolvida pela `}</span>
          <b className={styles.uxbras}>UXBRAS</b>
          <span>{` em parceria com a Microsoft Copilot. Ela é um modelo linguístico avançado, criado para ser um assistente de IA Generativo. Sua função principal é fornecer suporte abrangente a todos os alunos, desde a execução de tarefas até o fornecimento de informações relevantes. Utilizando capacidades de processamento de dados e compreensão da linguagem natural, ela está preparada para responder as suas perguntas e resolver desafios complexos, oferecendo uma experiência de aprendizado mais dinâmica e interativa e acessível. `}</span>
        </h3>
      </div>
      <div className={styles.linkWrapper}>
        <button className={styles.link}>
          <div className={styles.getStarted}>Get started</div>
        </button>
      </div>
    </section>
  );
};

export default SectionLaise;
