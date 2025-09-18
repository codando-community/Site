const PilaresSection = () => {
  const pilares = [
    {
      titulo: "OUSADIA",
      texto:
        "Saber inovar e se reinventar a cada dia, e não ter medo de se aventurar...",
    },
    {
      titulo: "APRENDIZADO",
      texto:
        "Estar sempre disposto para aprender e conhecer, afinal no mundo da tecnologia...",
    },
    {
      titulo: "COMPARTILHAR",
      texto:
        "Estar sempre compartilhando conhecimento, experiências...",
    },
  ];

  return (
    <section
      id="pilares"
      style={{
        padding: "2%",
        textAlign: "center",
        backgroundColor: "#F8F8F8",
        color: "#000",
      }}
    >
      <h1>NOSSOS PILARES</h1>
      {pilares.map(({ titulo, texto }) => (
        <div key={titulo} style={{ marginBottom: 30 }}>
          <h2>{titulo}</h2>
          <p style={{ maxWidth: "800px", margin: "0 auto" }}>{texto}</p>
        </div>
      ))}
    </section>
  );
};

export default PilaresSection;
