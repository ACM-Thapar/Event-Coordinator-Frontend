import {Link, useRouteError} from 'react-router-dom';

const Error = () => {
  const error = useRouteError ();
  console.log (error);

  if (error.status === 404) {
    return (
      <div>
        <h3>Sorry, the page you tried cannot be found.</h3>
        <Link to={'/'}>back home</Link>
      </div>
    );
  }
  return (
    <div>
      <h3>Sorry, something went wrong.</h3>
      <Link to={'/'}>back home</Link>
    </div>
  );
};
export default Error;
