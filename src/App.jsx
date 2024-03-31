import GlobalStyles from "./styles/global";
import Routes from "./routes";
import Header from "./components/Header";
import { ScientistsListProvider } from "./contexts/scientistsListContext_v1";
// import { ScientistsListProvider } from "./contexts/scientistsListContext_v2";
import { FiltersProvider } from "./contexts/filtersContext";

export function App() {
  return (
    <FiltersProvider>
      <ScientistsListProvider>
        <GlobalStyles />
        <Header />
        <Routes />
      </ScientistsListProvider>
    </FiltersProvider>
  );
}

export default App;
