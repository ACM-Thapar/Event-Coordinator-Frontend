import {Fragment} from 'react';
import {Outlet} from 'react-router-dom';
import {Navbar} from '../../Components';

const Layout = () => {
  return (
    <Fragment>
      <Navbar />
      <Outlet />
    </Fragment>
  );
};
export default Layout;
