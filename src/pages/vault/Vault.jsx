import { useState } from "react";
import HeaderComponent from "../vault/components/Header";
import ContentComponent from "../vault/components/Content";
import TableComponent from "../vault/components/Table";
import ModalComponent from "../vault/components/Modal";
import { Box } from "@mui/material";

const Vault = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const sampleData = [
    { id: 1, name: "John Doe", age: 25 },
    { id: 2, name: "Jane Smith", age: 30 },
    // Add more sample data as needed
  ];

  return (
    <Box mt={4}>
      <HeaderComponent text="Vault Page" />
      <ContentComponent handleModalOpen={handleModalOpen} />
      <TableComponent sampleData={sampleData} />
      <ModalComponent isOpen={isModalOpen} handleClose={handleModalClose} />
    </Box>
  );
};

export default Vault;
