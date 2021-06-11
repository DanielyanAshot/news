import { Layout } from 'antd';
import Navigation from '../Navigation';

const { Content } = Layout;

// TODO move inline styles

const AppContent = () => (
  <Content style={{ padding: '0 40px' }}>
    <Navigation />
  </Content>
);

export default AppContent;
