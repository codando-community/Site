import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const Header = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#141648",
        height: "80px", 
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <img
            src="/codando-logo-icon.svg"
            alt="Logotipo Codando"
            style={{ width: 50, height: 50 }}
          />
        </Typography>
        <Box>
          <Button style={{ color: '#FFEE23' }}>Quem Somos</Button>
          <Button style={{ color: '#FFEE23' }}>Nossos Pilares</Button>
          <Button style={{ color: '#FFEE23' }}>Projetos</Button>
          <Button style={{ color: '#FFEE23' }}>Eventos</Button>
          <Button style={{ color: '#FFEE23' }}>FAQ</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
