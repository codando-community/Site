const Footer = () => {
  return (
    <footer
      style={{
        position: "relative",
        background: "linear-gradient(to right, #010A2A, #154747)",
        padding: "10px",
        height: "200px",
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "0",
          transform: "translateY(-50%)",
          paddingLeft: "20px",
        }}
      >
        <img
          src="/src/assets/icon-codando.svg"
          alt="Codando"
          style={{ width: "300px", height: "81px" }}
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "10px",
          padding: "30px 20px",
        }}
      >
        <img
          src="/src/assets/icon-instagram.svg"
          alt="Instagram"
          style={{ width: "60px", height: "50px" }}
        />
        <img
          src="/src/assets/icon-linkedin.svg"
          alt="LinkedIn"
          style={{ width: "60px", height: "50px" }}
        />
        <img
          src="/src/assets/icon-email.svg"
          alt="Email"
          style={{ width: "60px", height: "50px" }}
        />
        <img
          src="/src/assets/icon-discord.svg"
          alt="Discord"
          style={{ width: "60px", height: "50px" }}
        />
      </div>

      <div
        style={{
          textAlign: "right",
          color: "#FFC42E",
          fontSize: "20px",
          padding: "0 20px",
        }}
      >
        Entre em contato conosco
      </div>

      <div
        style={{
          textAlign: "center",
          color: "#FFC42E",
          fontSize: "15px",
          marginTop: "10px",
        }}
      >
        &copy; {new Date().getFullYear()} Codando. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
