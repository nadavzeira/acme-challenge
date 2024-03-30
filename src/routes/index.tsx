import { Route, BrowserRouter } from "react-router-dom";

import ScientistsList from "../components/ScientistsList";
import ScientistModal from "../components/ScientistsList/ScientistModal";

export default function Routes() {
  return (
    <BrowserRouter>
      <ScientistsList />
      <Route path="/scientists/:id" component={ScientistModal} />
    </BrowserRouter>
  );
}
