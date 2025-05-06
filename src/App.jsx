import { Button } from "@mui/material";
import Header from './components/Header.jsx'
import QuemSomos from './components/QuemSomos.jsx'
import NossosPilares from './components/NossosPilares.jsx'
import Eventos from './components/Eventos.jsx'
import FAQ from './components/FAQ.jsx'
import AreaAtuacao from './components/AreaAtuacao.jsx'
import Cody from './components/Cody.jsx'
import './App.css'

function App() {
  return (
    <div style={{ backgroundColor: "#141648" }}>
      <Header/>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", marginTop: '200px', backgroundColor: "#141648" }}>
        <h1 style={{color: '#FFEE23'}}>CODANDO COMMUNITY</h1>
        <h2 style={{fontSize: 20}}>MAY THE COMMUNITY BE WITH YOU</h2>
        <h2 style={{fontWeight: 'bold'}}>NOSSAS REDES</h2>
        <div style={{ display: "flex", gap: 20, marginBottom: 20 }}>
        <Button
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
            src="/logo-discord.svg"
            alt="Logotipo Codando"
            style={{ width: 50, height: 50, marginBottom: 8 }}
          />
          Discord
        </Button>
        <Button
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
            src="/logo-instagram.svg"
            alt="Logotipo Codando"
            style={{ width: 50, height: 50, marginBottom: 8 }}
          />
          Instagram
        </Button>
        <Button
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
            src="/logo-youtube.svg"
            alt="Logotipo Codando"
            style={{ width: 50, height: 50, marginBottom: 8 }}
          />
          Youtube
        </Button>
        <Button
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
            src="/logo-linkedin.svg"
            alt="Logotipo Codando"
            style={{ width: 50, height: 50, marginBottom: 8 }}
          />
          Linkedin
        </Button>
        <Button
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
            src="/logo-sympla.svg"
            alt="Logotipo Codando"
            style={{ width: 50, height: 50, marginBottom: 8 }}
          />
          Sympla
        </Button>
        </div>
      </div>
      
      <div style={{backgroundColor: "#F8F8F8"}}>
        <QuemSomos/>    
      </div>

      <div style={{backgroundColor: "#F8F8F8"}}>  
        <AreaAtuacao/>
      </div>   
      
      <NossosPilares/>

      <div style={{backgroundColor: "#F8F8F8"}}>  
        <Cody/>
      </div>
      
      <Eventos/>
      <FAQ/>
    </div> 
  )
}

export default App


