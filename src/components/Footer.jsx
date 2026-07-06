import styles from "./Footer.module.css";
import SocialLinks from "../components/SocialLinks/SocialLinks";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topRow}>
        <img
          src="/src/assets/icon-codando.svg"
          alt="Codando Community"
          className={styles.logo}
        />

        <div className={styles.rightColumn}>
          <SocialLinks variant="footer" />

          <p className={styles.contact}>
            Entre em contato conosco
          </p>
        </div>
      </div>

      <small className={styles.copyright}>
        © {new Date().getFullYear()} Codando Community.
        Todos os direitos reservados.
      </small>
    </footer>
  );
};

export default Footer;