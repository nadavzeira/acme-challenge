import { Box } from "@mui/material";
import SearchBar from "./SearchBar";
import DropDowns from "./Dropdowns";

export default function Filters() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      width="100%"
      marginBottom="16px"
    >
      <Box width="50%">
        <SearchBar />
      </Box>
      <Box display="flex" width="30%">
        <DropDowns />
      </Box>
    </Box>
  );
}