import { Box, Button, Typography } from "@mui/material";

const ContentComponent = ({ handleModalOpen }) => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Content
      </Typography>
      <p>Hello</p>

      <Button variant="contained" color="primary" onClick={handleModalOpen}>
        Open Modal
      </Button>

      <Button variant="contained" color="secondary">
        Inna zmiana
      </Button>
    </Box>
  );
};

export default ContentComponent;
