import StyledContainer from './styles';
import ScientistModal from "./ScientistModal";
import ScientistsTable from "./ScientistsTable";
import Filters from "./Filters";

const ScientistsList = () => {
  return (
    <StyledContainer>
      <Filters />
      <ScientistsTable />
      <ScientistModal />
    </StyledContainer>
  );
}

export default ScientistsList;
