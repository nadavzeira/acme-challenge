import { Box, Container } from "@mui/material";
import UserModal from "../UserModal";
import UserTable from "../UserTable";
import SearchBar from "../SearchBar";
import UserFilters from "../UserFilters";

export default function UserList() {
  return (
    <Container
      maxWidth="md"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "90vh",
      }}
    >
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
          <UserFilters />
        </Box>
      </Box>
      <UserTable />
      <UserModal />
    </Container>
  );
}
