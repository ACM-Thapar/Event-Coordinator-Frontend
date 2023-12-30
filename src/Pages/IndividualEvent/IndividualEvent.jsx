import {Fragment} from 'react';
import {useLoaderData} from 'react-router-dom';

export const loader = () => async ({params}) => {
  const {id} = params;
  return {id};
};

const IndividualEvent = () => {
  const {id} = useLoaderData ();
  return (
    <Fragment>
      <div>Individual Event </div>
      <p>{id}</p>
    </Fragment>
  );
};
export default IndividualEvent;
