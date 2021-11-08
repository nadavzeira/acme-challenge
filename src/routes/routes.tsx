import { Switch, Route, BrowserRouter } from 'react-router-dom';

import UserList from '../components/UserList';
import UserModal from '../components/UserModal'

const Routes = () => {
  return (
    <BrowserRouter>
      <UserList/>
      <Switch>
        <Route path="/:id" component={UserModal}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;