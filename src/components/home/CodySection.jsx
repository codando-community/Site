import codyImage from "../../assets/cody.svg";

const CodySection = () => (
  <section
    style={{
      padding: "2%",
      textAlign: "center",
      color: "#000",
      backgroundColor: "#F8F8F8",
    }}
  >
    <h1>CODY</h1>
    <h2 style={{ fontSize: "40px" }}>O que falar do nosso bot assistente?</h2>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "40px",
        marginTop: "20px",
        flexWrap: "wrap",
      }}
    >
      <img src={codyImage} alt="Cody" style={{ width: "300px" }} />
      <p style={{ maxWidth: "400px", textAlign: "left" }}>
        Presente no Discord e neste site, o Cody surgiu para automatizar processos como autenticação, dúvidas e ajudar na segurança.
      </p>
    </div>
  </section>
);

export default CodySection;
