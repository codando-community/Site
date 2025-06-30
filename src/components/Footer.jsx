import "./Footer.css";

const Footer = () => {
  return (
    <footer
      style={{
        position: "relative",
        background: "linear-gradient(to right, #010A2A, #154747)",
        padding: "5px",
        height: "auto",
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      <div className="footer-container">
        <img
          src="/src/assets/icon-codando.svg"
          alt="Codando"
          style={{
            maxWidth: "350px",
            width: "100%",
            height: "auto",
            minWidth: "100px",
          }}
        />
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <a
            href="https://www.instagram.com/codando.community/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/src/assets/icon-instagram.svg"
              alt="Instagram"
              style={{ width: "60px", height: "50px", maxWidth: "100%" }}
            />
          </a>
          <a
            href="https://www.linkedin.com/company/codando-community/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/src/assets/icon-linkedin.svg"
              alt="LinkedIn"
              style={{ width: "60px", height: "50px", maxWidth: "100%" }}
            />
          </a>
          <a
            href="mailto:codando.community@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/src/assets/icon-email.svg"
              alt="Email"
              style={{ width: "60px", height: "50px", maxWidth: "100%" }}
            />
          </a>
          <a
            href="https://discord.com/invite/MvtgmhPSrx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/src/assets/icon-discord.svg"
              alt="Discord"
              style={{ width: "60px", height: "50px", maxWidth: "100%" }}
            />
          </a>
        </div>
      </div>

      <div className="footer-contact">Entre em contato conosco</div>

      <div
        style={{
          textAlign: "center",
          color: "#FFC42E",
          fontSize: "15px",
          marginTop: "10px",
        }}
      >
        &copy; {new Date().getFullYear()} Codando Community. Todos os direitos
        reservados.
      </div>
    </footer>
  );
};

export default Footer;
