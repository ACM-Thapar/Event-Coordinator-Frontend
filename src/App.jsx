import {Fragment} from 'react';
import {RouterProvider} from 'react-router-dom';
import router from './routes';

const App = () => {
  return (
    <Fragment>
      <RouterProvider router={router} />
    </Fragment>
  );
};
export default App;
