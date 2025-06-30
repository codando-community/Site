import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#141648",
    },
    secondary: {
      main: "#646cff",
    },
    background: {
      default: "#242424",
      paper: "#1a1a1a",
    },
    text: {
      primary: "#ffffff",
      secondary: "#646cff",
    },
  },
  typography: {
    fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif",
  },
});

export default theme;
