import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import BiotechIcon from "@mui/icons-material/Biotech";

export default function Header() {
  return (
    <Box height="10vh">
      <AppBar position="static">
        <Toolbar>
          <BiotechIcon fontSize="large" />
          <Typography variant="h6" component="div">
            Acme Corp.
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
