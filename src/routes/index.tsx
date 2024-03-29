import { Switch, Route, BrowserRouter } from "react-router-dom";

import UserList from "../components/UserList";
import UserModal from "../components/UserModal";

export default function Routes() {
  return (
    <BrowserRouter>
      <UserList />
      <Route path="/user/:id" component={UserModal} />
    </BrowserRouter>
  );
}
