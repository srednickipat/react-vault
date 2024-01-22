import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import MyButton from "../MuButton/MyButton";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <MyButton
            variant="outline"
            LinkComponent={Link}
            to={"/"}
            color="secondary"
            sx={{ mr: 2 }}
          >
            Home
          </MyButton>
          <MyButton
            variant="outline"
            LinkComponent={Link}
            to={"/vault"}
            color="secondary"
          >
            VAULT
          </MyButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
