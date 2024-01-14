import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <Container>
      <Box>
        <Outlet />
      </Box>
    </Container>
  );
};

export default MainLayout;
