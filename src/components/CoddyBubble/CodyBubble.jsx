import styles from "./CodyBubble.module.css";
import codyIcon from "../../assets/cody.svg";

const CodyBubble = ({ onClick }) => {
  return (
    <div className={styles.container}>
      <span className={styles.tooltip}>
        Fale com o Cody
      </span>

      <button
        className={styles.bubble}
        onClick={onClick}
        aria-label="Abrir assistente Cody"
        type="button"
      >
        <img
          src={codyIcon}
          alt=""
          className={styles.icon}
        />
      </button>
    </div>
  );
};

export default CodyBubble;