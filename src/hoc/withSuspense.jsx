import {Suspense} from 'react';

const withSuspense = (Component, fallback = <h1>Loading...</h1>) => props => (
  <Suspense fallback={fallback}>
    <Component {...props} />
  </Suspense>
);

export default withSuspense;
