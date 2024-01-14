import { Typography } from "@mui/material";

const HeaderComponent = ({ text }) => {
  return (
    <Typography variant="h4" gutterBottom>
      {text}
    </Typography>
  );
};

export default HeaderComponent;
