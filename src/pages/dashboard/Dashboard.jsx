import { Grid } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import MyButton from "../../components/MuButton/MyButton";
import MyTypography from "../../components/MyTypography/MyTypography";

function Dashboard() {
  const [count, setCount] = useState(0);

  return (
    <Grid container spacing={2} mt={4}>
      <Grid item xs={12} display="flex" justifyContent="center">
        <MyTypography variant="h4">Vite + React App Example</MyTypography>
      </Grid>

      <Grid item xs={12} display="flex" justifyContent="center">
        <MyButton onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </MyButton>
      </Grid>
      <Grid item xs={12}>
        <MyButton
          variant="contained"
          LinkComponent={Link}
          to={"/vault"}
          color="secondary"
        >
          VAULT Page
        </MyButton>
      </Grid>
    </Grid>
  );
}

export default Dashboard;
