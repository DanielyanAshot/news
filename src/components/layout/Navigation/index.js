import { Switch, Route, Redirect } from 'react-router-dom';
import SourcesPage from '../../pages/SourcesPage';
import SearchPage from '../../pages/SearchPage';

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
      <div>Not Found</div>
    </Route>
  </Switch>
);

export default Navigation;
