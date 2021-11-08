import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Dashboard from '../components/UserList';
import UserModal from '../components/UserModal'

const Routes = () => {
  return (
    <BrowserRouter>
      <Dashboard/>
      <Switch>
        <Route path="/:id" component={UserModal}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;