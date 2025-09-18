import React from "react";
import styles from'./PilaresSection.module.css'
import ousadiaImage from '../../assets/ousadia.svg'
import aprendizadoImage from '../../assets/aprendizado.svg'
import compartilharImage from '../../assets/compartilhar.svg'

const PilaresSection = () => {
  // const pilares = [
  //   {
  //     titulo: "OUSADIA",
  //     texto:
  //       "Saber inovar e se reinventar a cada dia, e não ter medo de se aventurar em uma nova tecnologia, emprego ou até mesmo em uma nova comunidade. E apesar de toda dificuldade, não desistir. Viva um bug de cada vez!",
  //     imagem: ousadiaImage,
  //     estilo: "ousadiaContainer"
  //   },
  //   {
  //     titulo: "APRENDIZADO",
  //     texto:
  //       "Estar sempre disposto para aprender e conhecer, afinal no mundo da tecnologia somos eternos aprendizes. Buscar sempre ir além e reconhecer que não sabe de tudo. Seja o parâmetro para sua própria função recursiva!",
  //     imagem: aprendizadoImage,
  //     estilo: "aprendizadoContainer"
  //   },
  //   {
  //     titulo: "COMPARTILHAR",
  //     texto:
  //       "Estar sempre compartilhando conhecimento, experiências e assim ajudar a comunidade crescer. Quando você ensina, você aprende!",
  //     imagem: compartilharImage,
  //     estilo: "compartilharContainer"
  //   },
  // ];

  return (
    <section
      id="pilares"
      style={{
        padding: "2%",
        textAlign: "center",
        color: "#FFF",
      }}  
      className={styles.background}
    >
      <h1 className={styles.titulo}>NOSSOS PILARES</h1>
      <div className={styles.ousadiaContainer}>
        <div className={styles.ousadiaConteudo}>
          <h2 className={styles.subtituloEsquerda}>Ousadia</h2>
          <p style={{ maxWidth: "725px", margin: "0 auto" }}>Saber inovar e se reinventar a cada dia, e não ter medo de se aventurar em uma nova tecnologia, emprego ou até mesmo em uma nova comunidade. E apesar de toda dificuldade, não desistir. Viva um bug de cada vez!</p>
        </div>
        <img className = {styles.ousadiaImage} src={ousadiaImage} alt="imagem sobre ousadia" />
      </div>
      <div className={styles.aprendizadoContainer}>
        <img className = {styles.aprendizadoImage} src={aprendizadoImage} alt="imagem sobre aprendizado" />
        <div className={styles.aprendizadoConteudo}>
          <h2>Aprendizado</h2>
          <p style={{ maxWidth: "775px", margin: "0 auto" }}>Estar sempre disposto para aprender e conhecer, afinal no mundo da tecnologia somos eternos aprendizes. Buscar sempre ir além e reconhecer que não sabe de tudo. Seja o parâmetro para sua própria função recursiva!</p>
        </div>
      </div>
      <div className={styles.compartilharContainer}>
        <div className={styles.compartilharConteudo}>
          <h2 className={styles.subtituloEsquerda}>Compartilhar</h2>
          <p style={{ maxWidth: "650px", margin: "0 auto" }}>Estar sempre compartilhando conhecimento, experiências e assim ajudar a comunidade crescer. Quando você ensina, você aprende!</p>
        </div>
        <img className={styles.compartilharImage} src={compartilharImage} alt="imagem sobre comparilhar" />  
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
