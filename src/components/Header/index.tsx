import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import BiotechIcon from "@mui/icons-material/Biotech";

export default function Header() {
  return (
    <Box flexGrow="1" height="10vh">
      <AppBar position="static">
        <Toolbar>
          <BiotechIcon fontSize="large" />
          <Typography variant="h6" component="div">
            Acme Corp
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
