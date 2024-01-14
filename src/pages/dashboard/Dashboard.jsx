import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  const [count, setCount] = useState(0);

  return (
    <Box mt={4} display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h4">Vite + React App Example</Typography>

      <Box>
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </Box>
      <Box>
        <Button LinkComponent={Link} to={"/vault"} color="secondary">
          VAULT Page
        </Button>
      </Box>
    </Box>
  );
}

export default Dashboard;
