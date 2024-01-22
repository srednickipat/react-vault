import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import MyButton from "../../components/MuButton/MyButton";

function Dashboard() {
  const [count, setCount] = useState(0);

  return (
    <Box mt={4} display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h4">Vite + React App Example</Typography>

      <Box>
        <MyButton onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </MyButton>
      </Box>
      <Box>
        <MyButton LinkComponent={Link} to={"/vault"} color="secondary">
          VAULT Page
        </MyButton>
      </Box>
    </Box>
  );
}

export default Dashboard;
