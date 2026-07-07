import styles from "./PilaresSection.module.css";

import ousadiaImage from "../../assets/ousadia.svg";
import aprendizadoImage from "../../assets/aprendizado.svg";
import compartilharImage from "../../assets/compartilhar.svg";

const PilaresSection = () => {
  return (
    <section
      id="pilares"
      className={styles.section}
      aria-labelledby="pilares-title"
    >
      <div className={styles.container}>
        <h2
          id="pilares-title"
          className={styles.title}
        >
          NOSSOS PILARES
        </h2>

        {/* ---------- OUSADIA ---------- */}

        <div className={styles.pillarRow}>
          <div className={styles.pillarContent}>
            <h3 className={styles.pillarTitle}>
              Ousadia
            </h3>

            <p className={styles.pillarText}>
              Saber inovar e se reinventar a cada dia, e não ter medo de se
              aventurar em uma nova tecnologia, emprego ou até mesmo em uma
              nova comunidade. E apesar de toda dificuldade, não desistir.
              Viva um bug de cada vez!
            </p>
          </div>

          <img
            src={ousadiaImage}
            alt="Ilustração representando ousadia"
            className={styles.pillarImage}
          />
        </div>

        {/* ---------- APRENDIZADO ---------- */}

        <div className={styles.pillarRow}>
          <img
            src={aprendizadoImage}
            alt="Ilustração representando aprendizado"
            className={styles.pillarImage}
          />

          <div className={styles.pillarContent}>
            <h3 className={`${styles.pillarTitle} ${styles.centerTitle}`}>
              Aprendizado
            </h3>

            <p className={styles.pillarText}>
              Estar sempre disposto para aprender e conhecer, afinal no mundo
              da tecnologia somos eternos aprendizes. Buscar sempre ir além e
              reconhecer que não sabe de tudo. Seja o parâmetro para sua
              própria função recursiva!
            </p>
          </div>
        </div>

        {/* ---------- COMPARTILHAR ---------- */}

        <div className={styles.pillarRow}>
          <div className={styles.pillarContent}>
            <h3 className={styles.pillarTitle}>
              Compartilhar
            </h3>

            <p className={styles.pillarText}>
              Estar sempre compartilhando conhecimento, experiências e assim
              ajudar a comunidade a crescer. Quando você ensina, você aprende!
            </p>
          </div>

          <img
            src={compartilharImage}
            alt="Ilustração representando compartilhamento"
            className={styles.pillarImage}
          />
        </div>
      </div>
    </section>
  );
};

export default PilaresSection;