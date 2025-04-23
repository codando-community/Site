import { useEffect, useState } from "react";
import { AppBar, Toolbar, Box, Button } from "@mui/material";

const menuItems = [
  "Quem Somos",
  "Nossos Pilares",
  "Projetos",
  "Eventos",
  "FAQ",
];

const Header = () => {
  const [visibleItems, setVisibleItems] = useState(
    Array(menuItems.length).fill(false)
  );

  useEffect(() => {
    menuItems.forEach((_, i) => {
      setTimeout(() => {
        setVisibleItems((prev) => {
          const newState = [...prev];
          newState[i] = true;
          return newState;
        });
      }, i * 200); // Delay entre os botões
    });
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#141648",
          height: "60px",
          display: "flex",
          justifyContent: "center",
          boxShadow: "none",
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 16px",
            minHeight: "60px !important",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src="/codando-logo-icon.svg"
              alt="Logotipo Codando"
              style={{ width: 40, height: 40 }}
            />
          </Box>

          <Box sx={{ display: "flex", gap: 3 }}>
            {menuItems.map((label, index) => (
              <Button
                key={label}
                sx={{
                  color: "#FFEE23",
                  fontWeight: "bold",
                  fontSize: "0.9rem",
                  textTransform: "none",
                  fontFamily: "Montserrat",
                  opacity: visibleItems[index] ? 1 : 0,
                  transform: visibleItems[index]
                    ? "translateY(0)"
                    : "translateY(-10px)",
                  transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
                  "&:hover": {
                    color: "#FFFFFF",
                    textDecoration: "underline",
                  },
                }}
              >
                {label.toUpperCase()}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
