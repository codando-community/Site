import codyImage from "../assets/cody.svg";

const Cody = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "2%",
        color: "#000000",
        fontSize: "20px",
      }}
    >
      <div>
        <h1>CODY</h1>
      </div>

      <div>
        <p style={{fontSize: "40px"}}>O que falar do nosso bot assistente?</p>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "40px",
          marginTop: "20px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={codyImage}
            alt="Cody"
            style={{
              width: "300px",
              height: "auto", 
              maxWidth: "100%",
            }}
          />
        </div>
        <div
          style={{
            maxWidth: "400px",
            textAlign: "left",
          }}
        >
          <p>
            Presente em nosso servidor do discord e aqui mesmo nesse site, ele
            surgiu com o intuito de facilitar e automatizar os processos
            realizados como autenticação ou liberar um cargo específico, além de
            esclarecer as mais diversas dúvidas e ajudar a manter o ambiente
            seguro e saudável.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cody;
