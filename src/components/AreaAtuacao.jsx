import React, { useRef } from "react";

const AreaAtuacao = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        minHeight: "50vh",
        padding: "2%",
        overflow: "hidden",
      }}
    >
      <h1
        style={{
          color: "#000000",
          marginBottom: "30px",
          marginTop: "10px",
          fontSize: "2rem",
        }}
      >
        ÁREAS DE ATUAÇÃO
      </h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          position: "relative",
        }}
      >
        <button
          onClick={scrollLeft}
          style={{
            position: "absolute",
            left: "10px",
            zIndex: 1,
            backgroundColor: "#000",
            color: "#FFC42ECC",
            border: "none",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          &#60;
        </button>

        <div
          ref={carouselRef}
          style={{
            display: "flex",
            overflowX: "auto",
            gap: "20px",
            width: "100%",
            padding: "10px",
            scrollBehavior: "smooth",
            flexWrap: "nowrap",
          }}
        >
          {[
            "Desenvolvimento Web",
            "Data Science",
            "Inteligência Artificial",
            "Segurança da Informação",
            "Desenvolvimento Mobile",
            "DevOps",
          ].map((area, index) => (
            <div
              key={index}
              style={{
                minWidth: "250px",
                height: "400px",
                backgroundColor: "#f0f0f0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "10px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <p>{area}</p>
            </div>
          ))}
        </div>

        <button
          onClick={scrollRight}
          style={{
            position: "absolute",
            right: "10px",
            zIndex: 1,
            backgroundColor: "#000",
            color: "#FFC42ECC",
            border: "none",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          &#62;
        </button>
      </div>
    </div>
  );
};

export default AreaAtuacao;
