import { Box, Container, CssBaseline, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
import theme from "../theme";

const MainLayout = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Box>
          <Outlet />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default MainLayout;
