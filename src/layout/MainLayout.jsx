import { Box, Container, CssBaseline, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
import theme from "../theme";
import NavBar from "../components/NavBar/NavBar";

const MainLayout = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <Container>
        <Box>
          <Outlet />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default MainLayout;
