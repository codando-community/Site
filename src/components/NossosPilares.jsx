import "../styles/nossosPilares.css"
import ousadiaIcone from "../assets/ousadia.svg";
import aprendizadoIcone from "../assets/aprendizado.svg";
import compartilharIcone from "../assets/compartilhar.svg";

const NossosPilares = () => {
    return (
        <>  
            <div className="nossosPilares">
            <h1>NOSSOS PILARES</h1>
                <div className ="containerNossosPilares"> 

                    <div className="containerPilar">
                        <div>
                            <h2 className="tituloPilar">OUSADIA</h2>
                            <div className="textoPilar">Saber inovar e se reinventar a cada dia, e não ter medo de se aventurar em uma nova tecnologia, emprego ou até mesmo em uma nova comunidade. E apesar de toda dificuldade, não desistir. Viva um bug de cada vez!</div>
                        </div>  
                        <img style={{
                            width: "300px",
                            height: "auto", 
                            maxWidth: "100%",
                            }} src={ousadiaIcone} alt="imagem sobre ousadia"/>
                    </div>


                    <div className="containerPilar-2"> 
                        <img style={{
                            width: "300px",
                            height: "auto", 
                            maxWidth: "100%",
                            }} src={aprendizadoIcone} alt="imagem sobre aprendizado"/>
                        <div className="conteudoPilar2">
                            <h2 className="tituloPilar">APRENDIZADO</h2>
                            <div className="textoPilar">Estar sempre disposto para aprender e conhecer, afinal no mundo da tecnologia somos eternos aprendizes. Buscar sempre ir além e reconhecer que não sabe de tudo. Seja o parâmetro para sua própria função recursiva!
                            </div>
                        </div>
                       
                    </div>    
                        
                    <div className="containerPilar">
                        <div className="">
                            <h2 className="tituloPilar">COMPARTILHAR</h2>
                            <div className="textoPilar">Estar sempre compartilhando conhecimento, experiências e assim ajudar a comunidade crescer. Quando você ensina, você aprende!
                            </div>
                        </div>
                        <img style={{
                            width: "300px",
                            height: "auto", 
                            maxWidth: "100%",
                            }} src={compartilharIcone} alt="imagem sobre compartilhar"/>
                    </div>
                        
                        

                </div>
            </div>
        </>
    );
};

export default NossosPilares;
