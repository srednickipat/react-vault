import { Box, Button, Modal, Typography } from "@mui/material";

const ModalComponent = ({ isOpen, handleClose }) => {
  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Box
        maxWidth="400px"
        sx={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
          justo sit amet est eleifend maximus.
        </Typography>
        <Button variant="contained" color="primary" onClick={handleClose}>
          Close Modal
        </Button>
      </Box>
    </Modal>
  );
};

export default ModalComponent;
