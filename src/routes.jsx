/* eslint-disable react-refresh/only-export-components */
import {lazy} from 'react';
import {createBrowserRouter} from 'react-router-dom';
import {QueryClient} from '@tanstack/react-query';
import withSuspense from './hoc/withSuspense';
import {IndividualEventLoader} from './Pages';

const Layout = withSuspense (lazy (() => import ('./Pages/Layout/Layout')));
const Home = withSuspense (lazy (() => import ('./Pages/Home/Home')));
const Events = withSuspense (lazy (() => import ('./Pages/Events/Events')));
const IndividualEvent = withSuspense (
  lazy (() => import ('./Pages/IndividualEvent/IndividualEvent'))
);
const Calendar = withSuspense (
  lazy (() => import ('./Pages/Calendar/Calendar'))
);
const Error = withSuspense (
  lazy (() => import ('./Components/Templates/Error/Error'))
);

export const queryClient = new QueryClient ({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

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
      {
        path: 'events/:id',
        element: <IndividualEvent />,
        loader: IndividualEventLoader (),
      },
    ],
  },
]);

export default router;
