import GlobalStyles from "./styles/global";
import Routes from "./routes";
import Header from "./components/Header";
import { ScientistsListProvider } from "./contexts/scientistsListContext";
import { FiltersProvider } from "./contexts/filtersContext";


export function App() {
  return (
    <ScientistsListProvider>
      <FiltersProvider>
        <GlobalStyles />
        <Header />
        <Routes />
      </FiltersProvider>
    </ScientistsListProvider>
  );
}

export default App;
