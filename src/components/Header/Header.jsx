import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Box, Button, IconButton, InputBase } from "@mui/material";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import SearchIcon from "@mui/icons-material/Search";

import styles from "./Header.module.css";

const menuItems = ["Quem Somos", "Nossos Pilares", "Agenda", "FAQ"];

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [visibleItems, setVisibleItems] = useState(Array(menuItems.length).fill(false));
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    menuItems.forEach((_, i) => {
      setTimeout(() => {
        setVisibleItems((prev) => {
          const newState = [...prev];
          newState[i] = true;
          return newState;
        });
      }, i * 200);
    });
  }, []);

  return (
    <AppBar position="fixed" className={styles.appBar}>
      <Toolbar className={styles.toolbar}>
        <Box className={styles.logoBox}>
          <img src="/codando-logo-icon.svg" alt="Logotipo Codando" className={styles.logo} />
        </Box>

        {/* Menu Items */}
        <Box className={styles.menuBox}>
          {menuItems.map((label, index) => (
            <Button
              key={label}
              className={`${styles.menuButton} ${visibleItems[index] ? styles.visible : ""}`}
              onClick={() => {
                const sectionId = label.toLowerCase().replace(" ", "-");
                
                if (label === "FAQ") {
                  navigate('/faq');
                } else if (label === "Agenda") {
                  navigate('/eventos');
                } else {
                  if (location.pathname === '/') {
                    const element = document.getElementById(sectionId);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  } else {
                    navigate('/', { state: { scrollTo: sectionId } });
                  }
                }
              }}
            >
              {label.toUpperCase()}
            </Button>
          ))}

          {/* Accessibility Icon */}
          <IconButton className={styles.iconButton} aria-label="Acessibilidade">
            <AccessibilityNewIcon className={styles.icon} />
          </IconButton>

          {/* Search Section */}
          <Box className={styles.searchBox}>
            <IconButton
              className={styles.iconButton}
              aria-label="Pesquisar"
              onClick={() => setShowSearch((prev) => !prev)}
            >
              <SearchIcon className={styles.icon} />
            </IconButton>
            {showSearch && (
              <InputBase
                placeholder="Pesquisar..."
                className={styles.searchInput}
                autoFocus
              />
            )}
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
