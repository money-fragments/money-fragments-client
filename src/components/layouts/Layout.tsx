import { Outlet } from 'react-router-dom';
import NavigationBar from './NavigationBar';

const Layout = () => {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  );
};

export default Layout;
