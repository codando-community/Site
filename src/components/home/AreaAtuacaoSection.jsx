import { useRef } from "react";

const AreaAtuacaoSection = () => {
  const carouselRef = useRef(null);
  const areas = [
    "Desenvolvimento Web",
    "Data Science",
    "Inteligência Artificial",
    "Segurança da Informação",
    "Desenvolvimento Mobile",
    "DevOps",
  ];

  const scroll = (offset) => {
    carouselRef.current?.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <section
      id="area-atuacao"
      style={{ padding: "2%", textAlign: "center", backgroundColor: "#fff" }}
    >
      <h1 style={{ marginBottom: "30px" }}>ÁREAS DE ATUAÇÃO</h1>
      <div
        style={{
          position: "relative",
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <button onClick={() => scroll(-300)} style={navBtn("left")}>&#60;</button>
        <div
          ref={carouselRef}
          style={{
            display: "flex",
            overflowX: "auto",
            gap: "20px",
            scrollBehavior: "smooth",
            padding: "10px",
            width: "100%",
            flexWrap: "nowrap",
          }}
        >
          {areas.map((area, idx) => (
            <div key={idx} style={card}>
              <p>{area}</p>
            </div>
          ))}
        </div>
        <button onClick={() => scroll(300)} style={navBtn("right")}>&#62;</button>
      </div>
    </section>
  );
};

const navBtn = (position) => ({
  position: "absolute",
  [position]: "10px",
  backgroundColor: "#000",
  color: "#FFC42ECC",
  border: "none",
  borderRadius: "50%",
  width: "40px",
  height: "40px",
  cursor: "pointer",
  zIndex: 1,
});

const card = {
  minWidth: "250px",
  height: "300px",
  backgroundColor: "#f0f0f0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "10px",
  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
};

export default AreaAtuacaoSection;
