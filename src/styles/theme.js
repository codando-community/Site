import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#141648', // Cor principal personalizada
    },
    secondary: {
      main: '#646cff', // Cor secundária personalizada
    },
    background: {
      default: '#242424', // Cor de fundo padrão
      paper: '#1a1a1a', // Cor de fundo para elementos como Card
    },
    text: {
      primary: '#ffffff', // Cor do texto principal
      secondary: '#646cff', // Cor do texto secundário
    },
  },
  typography: {
    fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif',
  },
});

export default theme;