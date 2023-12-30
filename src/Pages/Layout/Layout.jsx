import {Fragment} from 'react';
import {Outlet, useNavigation} from 'react-router-dom';
import {Navbar} from '../../Components';

const Layout = () => {
  const navigation = useNavigation ();
  return (
    <Fragment>
      <Navbar />
      {navigation.state === 'loading' ? <div>Loading Layout</div> : <Outlet />}
    </Fragment>
  );
};
export default Layout;
