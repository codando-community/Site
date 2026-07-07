import styles from "./CodySection.module.css";
import codyImage from "../../assets/cody.svg";

const CodySection = () => {
  return (
    <section
      id="cody"
      className={styles.section}
      aria-labelledby="cody-title"
    >
      <div className={styles.container}>
        <h2
          id="cody-title"
          className={styles.title}
        >
          Cody
        </h2>

        <p className={styles.subtitle}>
          O que falar do nosso bot assistente?
        </p>

        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <img
              src={codyImage}
              alt="Ilustração do Cody, assistente da comunidade Codando"
              className={styles.image}
            />
          </div>

          <div className={styles.textContainer}>
            <p className={styles.description}>
              Presente em nosso servidor do Discord e aqui mesmo nesse site,
              ele surgiu com o intuito de facilitar e automatizar os processos
              realizados como autenticação ou liberar um cargo específico,
              além de esclarecer as mais diversas dúvidas e ajudar a manter o
              ambiente seguro e saudável.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodySection;