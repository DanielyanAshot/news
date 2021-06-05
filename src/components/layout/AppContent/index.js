import { Layout } from 'antd';
import Navigation from '../Navigation';
import { BrowserRouter } from 'react-router-dom';

const { Content } = Layout;

// TODO move inline styles

const AppContent = () => (
  <Content style={{ padding: '0 50px' }}>
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  </Content>
);

export default AppContent;
