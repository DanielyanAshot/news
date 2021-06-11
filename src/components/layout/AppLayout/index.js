import AppHeader from '../AppHeader';
import AppContent from '../AppContent';
import { Router } from 'react-router-dom';
import history from '../../../helpers/history';

const AppLayout = () => (
  <Router history={history}>
    <section>
      <AppHeader />
      <AppContent />
    </section>
  </Router>
);

export default AppLayout;
