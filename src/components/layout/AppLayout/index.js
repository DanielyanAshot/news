import AppHeader from '../AppHeader';
import AppContent from '../AppContent';
import { Router } from 'react-router-dom';
import history from '../../../helpers/history';

const AppLayout = () => (
  <Router history={history}>
    <AppHeader />
    <AppContent />
  </Router>
);

export default AppLayout;
