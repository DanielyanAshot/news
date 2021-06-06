import AppHeader from '../AppHeader';
import AppContent from '../AppContent';
import { BrowserRouter } from 'react-router-dom';

const AppLayout = () => (
  <BrowserRouter>
    <section>
      <AppHeader />
      <AppContent />
    </section>
  </BrowserRouter>
);

export default AppLayout;
