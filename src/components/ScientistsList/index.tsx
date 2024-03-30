import { Container } from "@mui/material";
import ScientistModal from "./ScientistModal";
import ScientistsTable from "./ScientistsTable";
import Filters from "./Filters";

export default function ScientistsList() {
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
      <ScientistsTable />
      <ScientistModal />
    </Container>
  );
}
