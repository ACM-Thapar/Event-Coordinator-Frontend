import {createBrowserRouter} from 'react-router-dom';
import {Events, Home, Calendar, Layout} from './Pages';
import Error from './Components/Templates/Error/Error';

const router = createBrowserRouter ([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'events',
        element: <Events />,
      },
      {
        path: 'calendar',
        element: <Calendar />,
      },
    ],
  },
]);

export default router;
