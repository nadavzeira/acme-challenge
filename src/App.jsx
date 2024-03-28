import Routes from "./routes";
import Header from "./components/Header";
import { ListUsersProvider } from "./context/listUsersContext";

import GlobalStyles from "./styles/global";

export function App() {
  return (
    <ListUsersProvider>
      <GlobalStyles />
      <Header />
      <Routes />
    </ListUsersProvider>
  );
}

export default App;
