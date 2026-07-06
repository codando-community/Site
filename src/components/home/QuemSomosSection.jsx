import styles from "./QuemSomosSection.module.css";

const QuemSomosSection = () => {
  return (
    <section
      id="quem-somos"
      className={styles.section}
      aria-labelledby="quem-somos-title"
    >
      <div className={styles.container}>
        <h2
          id="quem-somos-title"
          className={styles.title}
        >
          O CODANDO
        </h2>

        <div className={styles.content}>
          <p>
            O Codando é uma comunidade de TI criada por veteranos que fazem
            parte de algum curso de tecnologia de uma das universidades:
            AGES, Anhembi Morumbi, FADERGS, Faseh, FPB, IBMR, São Judas,
            UniBH, Unicuritiba, UNIFACS, UniFG, Unisociesc, Unisul,
            UniRitter, UNA e UNP.
          </p>

          <p>
            O projeto tem como intuito ajudar os calouros, veteranos e
            entusiastas a se adaptarem com os estudos e se conectarem com a
            área de TI.
          </p>

          <p>
            Acreditamos que não importa o nível de conhecimento, todos temos
            algo para contribuir e nós queremos conhecer o que cada um tem de
            melhor!
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuemSomosSection;