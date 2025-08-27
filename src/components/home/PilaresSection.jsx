import React from "react";
import './PilaresSection.css'
import ousadiaImage from '../../assets/ousadia.svg'
import aprendizadoImage from '../../assets/aprendizado.svg'
import compartilharImage from '../../assets/compartilhar.svg'

const PilaresSection = () => {
  const pilares = [
    {
      titulo: "OUSADIA",
      texto:
        "Saber inovar e se reinventar a cada dia, e não ter medo de se aventurar em uma nova tecnologia, emprego ou até mesmo em uma nova comunidade. E apesar de toda dificuldade, não desistir. Viva um bug de cada vez!",
      imagem: ousadiaImage,
      estilo: "ousadiaContainer"
    },
    {
      titulo: "APRENDIZADO",
      texto:
        "Estar sempre disposto para aprender e conhecer, afinal no mundo da tecnologia somos eternos aprendizes. Buscar sempre ir além e reconhecer que não sabe de tudo. Seja o parâmetro para sua própria função recursiva!",
      imagem: aprendizadoImage,
      estilo: "aprendizadoContainer"
    },
    {
      titulo: "COMPARTILHAR",
      texto:
        "Estar sempre compartilhando conhecimento, experiências e assim ajudar a comunidade crescer. Quando você ensina, você aprende!",
      imagem: compartilharImage,
      estilo: "compartilharContainer"
    },
  ];

  return (
    <section
      id="pilares"
      style={{
        padding: "2%",
        textAlign: "center",
        color: "#FFF",
      }}  
      className="background"
    >
      <h1 className="titulo">NOSSOS PILARES</h1>
      <div className="ousadiaContainer">
        <div>
          <h2>Ousadia</h2>
          <p style={{ maxWidth: "600px", margin: "0 auto" }}>Saber inovar e se reinventar a cada dia, e não ter medo de se aventurar em uma nova tecnologia, emprego ou até mesmo em uma nova comunidade. E apesar de toda dificuldade, não desistir. Viva um bug de cada vez!</p>
        </div>
        <img src={ousadiaImage} alt="imagem sobre ousadia" />
      </div>
      <div className="aprendizadoContainer">
        <div>
          <h2>Aprendizado</h2>
          <p style={{ maxWidth: "600px", margin: "0 auto" }}>Estar sempre disposto para aprender e conhecer, afinal no mundo da tecnologia somos eternos aprendizes. Buscar sempre ir além e reconhecer que não sabe de tudo. Seja o parâmetro para sua própria função recursiva!</p>
        </div>
        <img src={aprendizadoImage} alt="imagem sobre aprendizado" />
      </div>
      <div className="compartilharContainer">
        <div>
          <h2>Compartilhar</h2>
          <p style={{ maxWidth: "600px", margin: "0 auto" }}>Estar sempre compartilhando conhecimento, experiências e assim ajudar a comunidade crescer. Quando você ensina, você aprende!</p>
        </div>
        <img src={compartilharImage} alt="imagem sobre comparilhar" />  
      </div>

      {/* {pilares.map(({ titulo, texto, imagem, estilo}) => (
        <div key={titulo} className={estilo} style={{ marginBottom: 30 }}>
          <div>
            <h2>{titulo}</h2>
          { <p style={{ maxWidth: "600px", margin: "0 auto" }}>{texto}</p> }
          </div>
          <img src={imagem} alt={titulo}></img>
        </div>
      ))} */}
    </section>
  );
};

export default PilaresSection;
