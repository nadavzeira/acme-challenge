import { Container } from "@mui/material";
import UserModal from "./UserModal";
import UserTable from "./UserTable";
import Filters from "./Filters";

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
      <Filters />
      <UserTable />
      <UserModal />
    </Container>
  );
}
