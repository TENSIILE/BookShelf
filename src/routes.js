import {Switch, Route, Redirect} from 'react-router-dom';
import {MainPage, EditPage, AddPage} from '@/pages';

export const useRoutes = () => (
  <Switch>
    <Route path="/" exact>
      <MainPage />
    </Route>
    <Route path="/add">
      <AddPage />
    </Route>
    <Route path="/edit">
      <EditPage />
    </Route>
    <Redirect to="/" />
  </Switch>
);
