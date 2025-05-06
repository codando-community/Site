const QuemSomos = () => {
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
        color: "#000000",
        fontSize: "20px",
        boxSizing: "border-box",
      }}
    >
      <h1
        style={{
          fontSize: "2rem",
          marginBottom: "20px",
        }}
      >
        O CODANDO
      </h1>
      <p
        style={{
          maxWidth: "800px",
          marginBottom: "15px",
          lineHeight: "1.6",
        }}
      >
        O Codando é uma comunidade de TI criada por veteranos que fazem parte de
        algum curso de tecnologia de uma das universidades: AGES, Anhembi
        Morumbi, FADERGS, Faseh, FPB, IBMR, São Judas, UniBH, Unicuritiba,
        UNIFACS, UniFG, Unisociesc, Unisul, UniRitter, UNA, UNP.
      </p>
      <p
        style={{
          maxWidth: "800px",
          marginBottom: "15px",
          lineHeight: "1.6",
        }}
      >
        O projeto tem como intuito ajudar os calouros, veteranos e entusiastas a
        se adaptarem com os estudos e se conectarem com a área de TI.
      </p>
      <p
        style={{
          maxWidth: "800px",
          marginBottom: "15px",
          lineHeight: "1.6",
        }}
      >
        Acreditamos que não importa o nível de conhecimento, todos temos algo
        para contribuir e nós queremos conhecer o que cada um tem de melhor!
      </p>
    </div>
  );
};

export default QuemSomos;
