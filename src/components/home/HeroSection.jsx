import styles from "./HeroSection.module.css";
import SocialLinks from "../SocialLinks/SocialLinks";

const HeroSection = () => {
  return (
    <header className={styles.hero}>
      <div className={styles.orangeGlow} />
      <div className={styles.blueGlow} />

      <div className={styles.heroContent}>
        <h1>CODANDO COMMUNITY</h1>

        <p>MAY THE COMMUNITY BE WITH YOU</p>

        <img className={styles.heroHand} src="/src/assets/hand.png" alt="Hand gesture" />
      </div>

      <section
        className={styles.heroSocials}
        aria-labelledby="social-title"
      >
        <h2 id="social-title">
          NOSSAS REDES
        </h2>

        <SocialLinks variant="hero" />
      </section>
    </header>
  );
};

export default HeroSection;