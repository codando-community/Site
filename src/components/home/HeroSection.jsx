import { Button } from "@mui/material";

const socialLinks = [
  { name: "Discord", icon: "/logo-discord.svg" },
  { name: "Instagram", icon: "/logo-instagram.svg" },
  { name: "Youtube", icon: "/logo-youtube.svg" },
  { name: "Linkedin", icon: "/logo-linkedin.svg" },
  { name: "Sympla", icon: "/logo-sympla.svg" },
];

const HeroSection = () => (
  <section
    style={{
      backgroundColor: "#141648",
      color: "#FFEE23",
      textAlign: "center",
      padding: "200px 16px 100px",
    }}
  >
    <h1>CODANDO COMMUNITY</h1>
    <h2 style={{ fontSize: 20 }}>MAY THE COMMUNITY BE WITH YOU</h2>
    <h2 style={{ fontWeight: "bold" }}>NOSSAS REDES</h2>
    <div
      style={{
        display: "flex",
        gap: 20,
        marginBottom: 20,
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {socialLinks.map((social) => (
        <Button
          key={social.name}
          variant="text"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textTransform: "none",
            color: "#FFF",
          }}
        >
          <img
            src={social.icon}
            alt={social.name}
            style={{ width: 50, height: 50, marginBottom: 8 }}
          />
          {social.name}
        </Button>
      ))}
    </div>
  </section>
);

export default HeroSection;
