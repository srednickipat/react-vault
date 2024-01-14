import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ContentComponent = ({ handleModalOpen }) => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Simple Page using material components
      </Typography>

      <Button variant="contained" color="primary" onClick={handleModalOpen}>
        Open Modal
      </Button>
      <Button LinkComponent={Link} to={"/"} color="secondary" sx={{ ml: 2 }}>
        Go Back
      </Button>
    </Box>
  );
};

export default ContentComponent;
