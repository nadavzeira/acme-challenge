import Routes from "./routes";
import Header from "./components/Header";
import { ListUsersProvider } from "./contexts/listUsersContext";
import { FiltersProvider } from "./contexts/FiltersContext";

import GlobalStyles from "./styles/global";

export function App() {
  return (
    <FiltersProvider>
      <ListUsersProvider>
        <GlobalStyles />
        <Header />
        <Routes />
      </ListUsersProvider>
    </FiltersProvider>
  );
}

export default App;
