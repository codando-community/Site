import { useRef } from "react";
import styles from "./AreaAtuacaoSection.module.css";

const areas = [
  "Desenvolvimento Web",
  "Data Science",
  "Inteligência Artificial",
  "Segurança da Informação",
  "Desenvolvimento Mobile",
  "DevOps",
];

const AreaAtuacaoSection = () => {
  const carouselRef = useRef(null);

  const scroll = (offset) => {
    carouselRef.current?.scrollBy({
      left: offset,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="area-atuacao"
      className={styles.section}
      aria-labelledby="areas-title"
    >
      <h2
        id="areas-title"
        className={styles.title}
      >
        ÁREAS DE ATUAÇÃO
      </h2>

      <div className={styles.carouselWrapper}>
        <button
          className={`${styles.arrow} ${styles.left}`}
          onClick={() => scroll(-320)}
          aria-label="Área anterior"
        >
          &#8249;
        </button>

        <div
          ref={carouselRef}
          className={styles.carousel}
        >
          {areas.map((area) => (
            <article
              key={area}
              className={styles.card}
            >
              <h3>{area}</h3>
            </article>
          ))}
        </div>

        <button
          className={`${styles.arrow} ${styles.right}`}
          onClick={() => scroll(320)}
          aria-label="Próxima área"
        >
          &#8250;
        </button>
      </div>
    </section>
  );
};

export default AreaAtuacaoSection;