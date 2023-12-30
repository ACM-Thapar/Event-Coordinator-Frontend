/* eslint-disable react-refresh/only-export-components */
import {lazy} from 'react';
import {createBrowserRouter} from 'react-router-dom';
import withSuspense from './hoc/withSuspense';

const Layout = withSuspense (lazy (() => import ('./Pages/Layout/Layout')));
const Home = withSuspense (lazy (() => import ('./Pages/Home/Home')));
const Events = withSuspense (lazy (() => import ('./Pages/Events/Events')));
const Calendar = withSuspense (
  lazy (() => import ('./Pages/Calendar/Calendar'))
);
const Error = withSuspense (
  lazy (() => import ('./Components/Templates/Error/Error'))
);

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
