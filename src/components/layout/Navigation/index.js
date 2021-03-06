import { Switch, Route, Redirect } from 'react-router-dom';
import SourcesPage from '../../pages/SourcesPage';
import SearchPage from '../../pages/SearchPage';
import NotFound from '../../pages/NotFound';

const Navigation = () => (
  <Switch>
    <Route exact path="/">
      <Redirect to="/sources" />
    </Route>

    <Route exact path="/sources">
      <SourcesPage />
    </Route>

    <Route exact path="/search">
      <SearchPage />
    </Route>

    <Route path="*">
      <NotFound />
    </Route>
  </Switch>
);

export default Navigation;
