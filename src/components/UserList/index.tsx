import { Container } from "@mui/material";
import UserModal from "../UserModal";
import UserTable from "../UserTable";

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
      <UserTable />
      <UserModal />
    </Container>
  );
};
